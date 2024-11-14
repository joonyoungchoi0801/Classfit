import { useEffect, useState } from 'react';
import type { StudentData } from '@/types/student.type';
import { STUDENT_FIELD, STUDENT_FIELD_LIST } from '@/constants/STUDENT';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postStudent } from '@/api/studentAPI';
import { getClassInfo } from '@/api/classAPI';
import { ClassData } from '@/types/class.type';

function useStudentRegister() {
  const initialStudentData: StudentData = {
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
    useState<StudentData>(initialStudentData);

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

  useEffect(() => {
    if (tempClassInfo) {
      setClassInfo(tempClassInfo);
    }
  }, [tempClassInfo]);

  const { mutateAsync: postStudentData } = useMutation({
    mutationFn: async (data: StudentData) => {
      return postStudent(data);
    },
    onError: () => {
      setModalMessage('학생 등록에 실패했습니다.');
      setIsModalVisible(true);
    },
    onSuccess: () => {
      setModalMessage('학생 등록이 완료되었습니다.');
      setStudentData(initialStudentData);
      setIsModalVisible(true);
    },
  });

  const handleOnChangeValue = (field: string, value: string) => {
    setStudentData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleOnChangeSubClassValue = (field: string, value: number) => {
    setStudentData((prevData) => ({
      ...prevData,
      subClassList: [...prevData.subClassList, value],
    }));
  };

  const handleOnChangeGenderValue = (field: string, value: string) => {
    if (value === '남') {
      setStudentData((prevData) => ({
        ...prevData,
        [field]: 'MALE',
      }));
    } else {
      setStudentData((prevData) => ({
        ...prevData,
        [field]: 'FEMALE',
      }));
    }
  };

  const validateStudentData = (): boolean => {
    for (const field of STUDENT_FIELD_LIST) {
      if (field === STUDENT_FIELD.SUB_CLASS_LIST) {
        if (studentData[field].length === 0) {
          return false;
        }
      } else if (
        field === STUDENT_FIELD.REMARK ||
        field === STUDENT_FIELD.COUNSELING_LOG
      ) {
        continue;
      } else {
        if (studentData[field as keyof StudentData] === '') {
          return false;
        }
      }
    }
    return true;
  };

  const handleOnSave = async () => {
    if (validateStudentData()) {
      //필드값 검증되었을 경우
      await postStudentData(studentData);
      return;
    }
    //필드값 검증에 실패했을 경우
    setModalMessage('필수 항목을 입력해주세요.');
    setIsModalVisible(true);
    return;
  };

  const handleOnModalClose = () => {
    setIsModalVisible(false);
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

export default useStudentRegister;
