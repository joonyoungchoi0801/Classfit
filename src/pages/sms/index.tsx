import { useEffect, useState } from 'react';
import * as S from './Sms.styles';

import Path from '@/components/path';
import ManageLayout from '@/components/layout/managelayout';
import Label from '@/components/label';
import QuestionModal from '@/components/modal/questionModal';
import Modal from '@/components/modal';
import { useLocation } from 'react-router-dom';
import { SmsData } from '@/types/sms.type';
import { getStudentDetail } from '@/api/studentAPI';
import { postSms } from '@/api/smsAPI';

function Sms() {
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const [message, setMessage] = useState('');

  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [studentData, setStudentData] = useState<SmsData[] | []>([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const studentId = query.get('studentId');

  const studentArray = studentId ? studentId.split(',') : [];
  const handlePhoneNumberChange = (name: string) => {
    setStudentData(studentData.filter((data) => data.studentName !== name));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (!message) return;
    setIsSendModalOpen(true);
  };

  const handleSendSms = async () => {
    const res = await postSms(studentData, 1);
    if (res.status === 200) {
      setIsSendModalOpen(false);
      setIsConfirmModalOpen(true);
    } else {
      alert('문자 전송에 실패했습니다.');
    }
  };

  const addStudentData = (
    studentId: string,
    studentName: string,
    messageText: string
  ) => {
    setStudentData((prev) => {
      const isExist = prev.some((student) => student.studentId === studentId);
      if (isExist) {
        return prev;
      }
      return [...prev, { studentId, studentName, messageText }];
    });
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      for (const id of studentArray) {
        const res = await getStudentDetail(Number(id));
        const { studentId, name } = res.data.data;
        addStudentData(studentId, name, '');
      }
    };
    fetchStudentData();
  }, []);

  useEffect(() => {
    setStudentData((prev) => {
      if (!prev) return prev;
      return prev.map((student) => ({
        ...student,
        messageText: message,
      }));
    });
  }, [message]);

  console.log(studentData.length);
  console.log(studentData);
  return (
    <>
      <ManageLayout>
        <S.SmsWrapper>
          <Path />
          <S.Title>SMS 보내기</S.Title>
          <S.ContentWrapper>
            <S.Area style={{ gap: '2.2rem' }}>
              <S.ContentText>보내는 사람</S.ContentText>
              <S.Bar />
            </S.Area>
            <S.Area style={{ gap: '3.7rem' }}>
              <S.ContentText>받는 사람</S.ContentText>
              <S.Bar />
            </S.Area>
            <S.RecipientArea>
              {Array.isArray(studentData) &&
                studentData.map((data) => (
                  <Label
                    key={data.studentId}
                    title={data.studentName}
                    onClose={() => handlePhoneNumberChange(data.studentName)}
                  />
                ))}
            </S.RecipientArea>
            <S.BtnArea>
              <S.PhraseBtn>자주쓰는문구</S.PhraseBtn>
            </S.BtnArea>
            <S.TextArea
              placeholder='내용을 입력하세요.'
              value={message}
              onChange={handleTextChange}
            />
            <S.BtnArea>
              <S.CancelBtn>취소</S.CancelBtn>
              <S.SendBtn $isDisabled={!message} onClick={handleSend}>
                전송
              </S.SendBtn>
            </S.BtnArea>
          </S.ContentWrapper>
        </S.SmsWrapper>
      </ManageLayout>
      <QuestionModal
        title='메세지를 전송하시겠습니까 ?'
        message={`총 ${studentData.length * 2}명에게 전송될 예정입니다.`}
        onConfirm={() => handleSendSms()}
        onCancel={() => setIsSendModalOpen(!isSendModalOpen)}
        isOpen={isSendModalOpen}
      />
      <Modal
        message='전송이 완료되었습니다.'
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
      />
    </>
  );
}

export default Sms;
