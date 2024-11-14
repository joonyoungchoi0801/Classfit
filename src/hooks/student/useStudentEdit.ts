import { useEffect, useState } from 'react';
import type {
  PatchedStudentData,
  StudentData,
  StudentViewData,
} from '@/types/student.type';
import { STUDENT_FIELD, STUDENT_FIELD_LIST } from '@/constants/STUDENT';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getStudentDetail,
  patchStudentDetail,
  postStudent,
} from '@/api/studentAPI';
import { getClassInfo } from '@/api/classAPI';
import { ClassData } from '@/types/class.type';
import { useNavigate } from 'react-router-dom';

function useStudentEdit(studentId: string) {
  const initialStudentData: StudentViewData = {
    [STUDENT_FIELD.NAME]: '',
    [STUDENT_FIELD.GENDER]: '',
    [STUDENT_FIELD.BIRTH]: '',
    [STUDENT_FIELD.STUDENT_NUMBER]: '',
    [STUDENT_FIELD.PARENT_NUMBER]: '',
    [STUDENT_FIELD.GRADE]: '',
    [STUDENT_FIELD.SUB_CLASS_LIST]: [],
    [STUDENT_FIELD.ADDRESS]: '',
    [STUDENT_FIELD.REMARK]: '',
    [STUDENT_FIELD.COUNSELING_LOG]: '',
  };
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [classInfo, setClassInfo] = useState<
    Record<string, { subClassId: number; subClassName: string }[]>
  >({});

  const [studentData, setStudentData] =
    useState<StudentViewData>(initialStudentData);
  const [studentPatchedData, setStudentPatchedData] =
    useState<PatchedStudentData>({});

  const navigate = useNavigate();

  const {
    data: tempClassInfo,
    error: getClassInfoError,
    isFetching: isFetchingClassInfo,
  } = useQuery({
    queryKey: ['classInfo'],
    queryFn: getClassInfo,
    staleTime: 0,
    select: (data) => {
      return data.data.data.reduce(
        (
          acc: Record<string, { subClassId: number; subClassName: string }[]>,
          classItem: ClassData
        ) => {
          acc[classItem.mainClassName] = classItem.subClasses.map(
            (subClass) => ({
              subClassId: subClass.subClassId,
              subClassName: subClass.subClassName,
            })
          );
          return acc;
        },
        {}
      );
    },
  });

  const {
    data: tempStudentData,
    error: getStudentDataError,
    isFetching: isFetchingStudentData,
  } = useQuery({
    queryKey: ['studentViewData'],
    queryFn: () => getStudentDetail(Number(studentId)),
    staleTime: 0,
    select: (data) => {
      return data.data.data;
    },
  });

  useEffect(() => {
    if (tempStudentData) {
      setStudentData(tempStudentData);
    }
  }, [tempStudentData]);

  useEffect(() => {
    if (tempClassInfo) {
      setClassInfo(tempClassInfo);
    }
  }, [tempClassInfo]);

  const { mutateAsync: patchStudentDetailData } = useMutation({
    mutationFn: async (data: PatchedStudentData) => {
      return patchStudentDetail(Number(studentId), data);
    },
    onError: () => {
      setModalMessage('학생 정보 수정에 실패했습니다.');
      setIsModalVisible(true);
    },
    onSuccess: () => {
      setModalMessage('학생 정보 수정이 완료되었습니다.');
      setIsModalVisible(true);
    },
  });

  const handleOnChangeValue = (field: string, value: string) => {
    setStudentData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setStudentPatchedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleOnChangeSubClassValue = (field: string, value: number) => {
    setStudentPatchedData((prevData) => ({
      ...prevData,
      [field]: [value],
    }));
  };

  const handleOnChangeGenderValue = (field: string, value: string) => {
    if (value === '남') {
      setStudentPatchedData((prevData) => ({
        ...prevData,
        [field]: 'MALE',
      }));
    } else {
      setStudentPatchedData((prevData) => ({
        ...prevData,
        [field]: 'FEMALE',
      }));
    }
  };

  const validateStudentData = (): boolean => {
    for (const field of Object.keys(studentPatchedData)) {
      if (field === STUDENT_FIELD.SUB_CLASS_LIST) {
        if (studentPatchedData[field]!.length === 0) {
          return false;
        }
      } else if (
        field === STUDENT_FIELD.REMARK ||
        field === STUDENT_FIELD.COUNSELING_LOG
      ) {
        continue;
      } else if (
        field === STUDENT_FIELD.GRADE &&
        !Object.keys(studentPatchedData).includes(STUDENT_FIELD.SUB_CLASS_LIST)
      ) {
        return false;
      } else {
        if (studentPatchedData[field as keyof StudentViewData] === '') {
          return false;
        }
      }
    }
    return true;
  };

  const handleOnSave = async () => {
    if (Object.keys(studentPatchedData).length === 0) {
      setModalMessage('변경된 내용이 없습니다.');
      setIsModalVisible(true);
      return;
    }
    if (validateStudentData()) {
      await patchStudentDetailData(studentPatchedData);
      return;
    }
    //필드값 검증에 실패했을 경우
    setModalMessage('필수 항목을 입력해주세요.');
    setIsModalVisible(true);
    return;
  };

  const handleOnModalClose = () => {
    setIsModalVisible(false);
    navigate('/manage/studentinfo/list');
  };

  const handleOnCancel = () => {
    setStudentData(initialStudentData);
    setModalMessage('취소되었습니다.');
    setIsModalVisible(true);
  };

  return {
    modalMessage,
    isModalVisible,
    studentData,
    classInfo,
    handleOnChangeValue,
    handleOnChangeSubClassValue,
    handleOnChangeGenderValue,
    handleOnSave,
    handleOnModalClose,
    handleOnCancel,
  };
}

export default useStudentEdit;
