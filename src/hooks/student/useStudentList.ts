import { useEffect, useState } from 'react';
import type {
  StudentData,
  StudentListData,
  StudentViewData,
} from '@/types/student.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteStudent,
  getStudent,
  getStudentDetail,
  getStudentSearch,
} from '@/api/studentAPI';
import { useNavigate } from 'react-router-dom';

function useStudentList() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  const [isQuestionModalVisible, setIsQuestionModalVisible] =
    useState<boolean>(false);
  const [questionModalTitle, setQuestionModalTitle] = useState<string>('');
  const [questionModalMessage, setQuestionModalMessage] = useState<string>('');

  const [isStudentModalVisible, setIsStudentModalVisible] =
    useState<boolean>(false);

  const [studentListData, setStudentListData] = useState<StudentListData[]>([]);
  const [studentVisibleData, setStudentVisibleData] = useState<
    StudentListData[]
  >([]);

  const [studentIds, setStudentIds] = useState<number[]>([]);
  const [studentId, setStudentId] = useState<number>();
  // const [studentDetailData, setStudentDetailData] = useState<StudentViewData>();

  const navigate = useNavigate();

  const {
    data: tempStudentList,
    error: getStudentListError,
    isFetching: isFetchingStudentList,
    refetch: refetchStudentList,
  } = useQuery({
    queryKey: ['studentList'],
    queryFn: getStudent,
    staleTime: 0,
    select: (data) => {
      return data.data.data;
    },
  });

  useEffect(() => {
    if (tempStudentList) {
      setStudentVisibleData(tempStudentList);
      setStudentListData(tempStudentList);
    }
  }, [tempStudentList]);

  const { mutateAsync: deleteStudentData } = useMutation({
    mutationFn: async (studentIds: number[]) => {
      return deleteStudent(studentIds);
    },
    onError: () => {
      setModalMessage('학생 삭제에 실패했습니다.');
      setStudentIds([]);
      setIsModalVisible(true);
    },
    onSuccess: () => {
      setModalMessage('학생 삭제가 완료되었습니다.');
      setStudentIds([]);
      setIsModalVisible(true);
    },
  });

  // const { mutateAsync: getStudentDetailData } = useMutation({
  //   mutationFn: async (studentId: number) => {
  //     return getStudentDetail(studentId);
  //   },
  //   onError: () => {
  //     setModalMessage('학생 정보 조회에 실패했습니다.');
  //     setIsModalVisible(true);
  //   },
  //   onSuccess: (data) => {
  //     setStudentDetailData(data.data.data);
  //     setIsStudentModalVisible(true);
  //   },
  // });

  const { mutateAsync: getStudentSearchData } = useMutation({
    mutationFn: async (studentName: string) => {
      return getStudentSearch(studentName);
    },
    onError: () => {
      setModalMessage('학생 검색에 실패했습니다.');
      setIsModalVisible(true);
    },
    onSuccess: (data) => {
      setStudentVisibleData(
        Array.isArray(data.data.data) ? data.data.data : [data.data.data]
      );
    },
  });

  const handleOnSelectDelete = (id: number) => {
    setStudentIds((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleOnDelete = async () => {
    if (studentIds.length === 0) {
      return;
    }
    setQuestionModalTitle('선택항목을 삭제하시겠습니까?');
    setQuestionModalMessage(`${studentIds.length}명의 학생이 삭제됩니다.`);
    setIsQuestionModalVisible(true);
  };

  const handleOnSideDelete = (studentId: number) => {
    setStudentIds([studentId]);
    setQuestionModalTitle('선택항목을 삭제하시겠습니까?');
    setQuestionModalMessage(`1명의 학생이 삭제됩니다.`);
    setIsQuestionModalVisible(true);
  };

  const handleOnEdit = (studentId: number) => {
    navigate(`/manage/studentinfo/edit?studentId=${studentId}`);
  };

  // const _handleOnDelete = async () => {
  //   // await deleteStudentData(studentIds);
  //   // await refetchStudentList();
  //   const updatedStudentListData = studentListData.filter(
  //     (student) => !targetStudentIds.includes(student.studentId)
  //   );

  // };

  const _handleOnDelete = () => {
    const updatedStudentListData = studentListData.filter(
      (student) => !studentIds.includes(student.studentId)
    );
    setIsQuestionModalVisible(false);
    setStudentIds([]);
    setStudentListData(updatedStudentListData);
    setStudentVisibleData(updatedStudentListData);
    setTimeout(() => {
      alert('삭제되었습니다.');
    }, 500);
  };

  const handleOnName = async (studentId: number) => {
    setStudentId(studentId);
    setIsStudentModalVisible(true);
    // await getStudentDetailData(studentId);
  };

  const handleOnSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    await getStudentSearchData(e.currentTarget.value);
  };

  const handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();
    if (!value) {
      setStudentVisibleData(studentListData);
    } else {
      const filteredData = studentListData.filter((student) =>
        student.name.toLowerCase().includes(value)
      );
      if (filteredData.length > 0) {
        setStudentVisibleData(filteredData);
      } else {
        setStudentVisibleData(studentListData);
      }
    }
  };

  const handleOnModalConfirm = () => {
    setIsQuestionModalVisible(false);
    _handleOnDelete();
  };

  const handleOnModalClose = () => {
    setStudentIds([]);
    setIsModalVisible(false);
    setIsQuestionModalVisible(false);
    setIsStudentModalVisible(false);
  };

  return {
    studentListData,
    studentVisibleData,
    // studentDetailData,
    studentIds,
    studentId,
    modalMessage,
    isModalVisible,
    isStudentModalVisible,
    isQuestionModalVisible,
    questionModalTitle,
    questionModalMessage,
    handleOnDelete,
    handleOnSideDelete,
    handleOnEdit,
    handleOnSelectDelete,
    handleOnName,
    handleOnSearch,
    handleOnSearchChange,
    handleOnModalConfirm,
    handleOnModalClose,
  };
}

export default useStudentList;
