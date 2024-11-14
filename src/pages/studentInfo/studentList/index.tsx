import * as S from './StudentList.styles';
import * as PS from '@/pages/studentInfo/StudentInfo.styles';
import Button from '@/components/button';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import CheckBoxIcon from '@/assets/info/checkBox.svg';
import SearchIcon from '@/assets/info/search.svg';
import Path from '@/components/path';
import useStudentList from '@/hooks/useStudentList';
import QuestionModal from '@/components/modal/questionModal';
import Modal from '@/components/modal';

function StudentList() {
  const studentListHandler = useStudentList();

  return (
    <PS.Container>
      <Path />
      <PS.TitleWrapper>
        <PS.Title>학생목록</PS.Title>
      </PS.TitleWrapper>
      <PS.ButtonWrapper>
        <Button
          title='삭제'
          textColor={
            studentListHandler.studentIds.length > 0
              ? 'var(--color-white)'
              : '#999999'
          }
          backgroundColor={
            studentListHandler.studentIds.length > 0
              ? 'var(--color-blue)'
              : 'var(--color-white)'
          }
          borderColor='#999999'
          isBorder={studentListHandler.studentIds.length > 0 ? false : true}
          onClick={studentListHandler.handleOnDelete}
        />
      </PS.ButtonWrapper>
      <S.Table>
        <S.TableHeader>
          <S.TableCell $isHeader={true}>
            <S.InputContainer>
              <S.BtnIcon src={SearchIcon} />
              <S.Input placeholder='이름을 검색해보세요.' />
            </S.InputContainer>
          </S.TableCell>
          <S.TableCell $isHeader={true}>상태</S.TableCell>
          <S.TableCell $isHeader={true}>학생전화번호</S.TableCell>
          <S.TableCell $isHeader={true}>관리</S.TableCell>
        </S.TableHeader>

        {studentListHandler.studentListData.map((student) => (
          <S.TableRow
            key={student.studentId}
            $isSelected={studentListHandler.studentIds.includes(
              student.studentId
            )}
          >
            <S.TableCell $alignLeft={true}>
              <S.IconWrapper
                $alignLeft={true}
                onClick={() =>
                  studentListHandler.handleOnSelectDelete(student.studentId)
                }
              >
                {studentListHandler.studentIds.includes(student.studentId) ? (
                  <S.BtnIcon src={SelectedCheckBoxIcon} />
                ) : (
                  <S.BtnIcon src={CheckBoxIcon} />
                )}
                {student.name}
              </S.IconWrapper>
            </S.TableCell>
            <S.TableCell>{student.isStudent ? '재학생' : '휴학생'}</S.TableCell>
            <S.TableCell>{student.studentNumber}</S.TableCell>
            <S.TableCell>
              <S.EditWrapper>
                <S.EditButton>수정</S.EditButton>
                <S.EditDivider>|</S.EditDivider>
                <S.EditButton
                  onClick={() => {
                    studentListHandler.handleOnSideDelete(student.studentId);
                  }}
                >
                  삭제
                </S.EditButton>
              </S.EditWrapper>
            </S.TableCell>
          </S.TableRow>
        ))}
      </S.Table>
      <Modal
        message={studentListHandler.modalMessage}
        onClose={studentListHandler.handleOnModalClose}
        isOpen={studentListHandler.isModalVisible}
      />
      <QuestionModal
        title={studentListHandler.questionModalTitle}
        message={studentListHandler.questionModalMessage}
        onConfirm={studentListHandler.handleOnModalConfirm}
        isOpen={studentListHandler.isQuestionModalVisible}
        onCancel={studentListHandler.handleOnModalClose}
      />
    </PS.Container>
  );
}

export default StudentList;
