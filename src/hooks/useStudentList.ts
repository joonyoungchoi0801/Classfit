import { useEffect, useState } from 'react';
import type { StudentListData } from '@/types/student.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteStudent, getStudent } from '@/api/studentAPI';

function useStudentList() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  const [isQuestionModalVisible, setIsQuestionModalVisible] =
    useState<boolean>(false);
  const [questionModalTitle, setQuestionModalTitle] = useState<string>('');
  const [questionModalMessage, setQuestionModalMessage] = useState<string>('');

  const [studentListData, setStudentListData] = useState<StudentListData[]>([]);
  const [studentIds, setStudentIds] = useState<number[]>([]);

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
      setStudentListData(tempStudentList);
    }
  }, [tempStudentList]);

  const { mutateAsync: deleteStudentData } = useMutation({
    mutationFn: async (studentIds: number[]) => {
      console.log('studentIds', studentIds);
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

  const _handleOnDelete = async () => {
    await deleteStudentData(studentIds);
    await refetchStudentList();
  };

  const handleOnModalConfirm = () => {
    setIsQuestionModalVisible(false);
    _handleOnDelete();
  };

  const handleOnModalClose = () => {
    setStudentIds([]);
    setIsModalVisible(false);
    setIsQuestionModalVisible(false);
  };

  return {
    studentListData,
    studentIds,
    modalMessage,
    isModalVisible,
    isQuestionModalVisible,
    questionModalTitle,
    questionModalMessage,
    handleOnDelete,
    handleOnSideDelete,
    handleOnSelectDelete,
    handleOnModalConfirm,
    handleOnModalClose,
  };
}

export default useStudentList;
