import Path from '@/components/path';
import * as S from './StudentEdit.styles';
import * as PS from '@/pages/studentInfo/StudentInfo.styles';
import DropDown from '@/components/dropDown';
import Button from '@/components/button';
import useStudentRegister from '@/hooks/student/useStudentRegister';
import { STUDENT_FIELD } from '@/constants/STUDENT';
import Modal from '@/components/modal';
import ClassDropDown from '@/components/dropDown/classDropDown';
import useStudentEdit from '@/hooks/student/useStudentEdit';

function StudentEdit({ studentId }: { studentId: string }) {
  const genderLst = ['남', '여'];
  const studentRegisterHandler = useStudentEdit(studentId);

  return (
    <PS.Container>
      <Path />
      <PS.TitleWrapper>
        <PS.Title>학생수정</PS.Title>
      </PS.TitleWrapper>
      <S.FormWrapper>
        <S.Row>
          <S.FormGroup>
            <S.Label>학생명</S.Label>
            <S.Input
              placeholder='학생이름 입력'
              value={studentRegisterHandler.studentData.name}
              onChange={(e) =>
                studentRegisterHandler.handleOnChangeValue(
                  STUDENT_FIELD.NAME,
                  e.target.value
                )
              }
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>성별</S.Label>
            <DropDown
              options={genderLst}
              value={studentRegisterHandler.studentData.gender}
              placeholder='성별 선택'
              onChange={(value) =>
                studentRegisterHandler.handleOnChangeGenderValue(
                  STUDENT_FIELD.GENDER,
                  value
                )
              }
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>생년월일</S.Label>
            <S.Input
              placeholder='YYYY-MM-DD'
              value={studentRegisterHandler.studentData.birth}
              onChange={(e) =>
                studentRegisterHandler.handleOnChangeValue(
                  STUDENT_FIELD.BIRTH,
                  e.target.value
                )
              }
              type='date'
            />
          </S.FormGroup>
        </S.Row>

        <S.Row>
          <S.FormGroup>
            <S.Label>학년</S.Label>
            <DropDown
              options={Object.keys(studentRegisterHandler.classInfo)}
              value={studentRegisterHandler.studentData.grade}
              placeholder='학년 선택'
              onChange={(value) =>
                studentRegisterHandler.handleOnChangeValue(
                  STUDENT_FIELD.GRADE,
                  value
                )
              }
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>클래스</S.Label>
            <ClassDropDown
              options={
                studentRegisterHandler.classInfo[
                  studentRegisterHandler.studentData.grade
                ]
              }
              value={studentRegisterHandler.studentData.subClassList}
              placeholder='클래스 선택'
              onChange={(value) =>
                studentRegisterHandler.handleOnChangeSubClassValue(
                  STUDENT_FIELD.SUB_CLASS_LIST,
                  value
                )
              }
            />
          </S.FormGroup>
        </S.Row>

        <S.Row>
          <S.FormGroup style={{ flex: 1 }}>
            <S.Label>주소</S.Label>
            <S.Input
              placeholder='주소 입력'
              value={studentRegisterHandler.studentData.address}
              onChange={(e) =>
                studentRegisterHandler.handleOnChangeValue(
                  STUDENT_FIELD.ADDRESS,
                  e.target.value
                )
              }
            />
          </S.FormGroup>
        </S.Row>

        <S.Row>
          <S.FormGroup>
            <S.Label>학생 전화번호</S.Label>
            <S.Input
              placeholder='전화번호 입력'
              value={studentRegisterHandler.studentData.studentNumber}
              onChange={(e) =>
                studentRegisterHandler.handleOnChangeValue(
                  STUDENT_FIELD.STUDENT_NUMBER,
                  e.target.value
                )
              }
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>학부모 전화번호</S.Label>
            <S.Input
              placeholder='전화번호 입력'
              value={studentRegisterHandler.studentData.parentNumber}
              onChange={(e) =>
                studentRegisterHandler.handleOnChangeValue(
                  STUDENT_FIELD.PARENT_NUMBER,
                  e.target.value
                )
              }
            />
          </S.FormGroup>
        </S.Row>

        <S.FormGroup>
          <S.Label>상세정보</S.Label>
          <S.Textarea
            placeholder='필요한 메모를 남깁니다.'
            value={studentRegisterHandler.studentData.remark}
            onChange={(e) =>
              studentRegisterHandler.handleOnChangeValue(
                STUDENT_FIELD.REMARK,
                e.target.value
              )
            }
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>상담일지</S.Label>
          <S.Textarea
            placeholder='필요한 메모를 남깁니다.'
            value={studentRegisterHandler.studentData.counselingLog}
            onChange={(e) =>
              studentRegisterHandler.handleOnChangeValue(
                STUDENT_FIELD.COUNSELING_LOG,
                e.target.value
              )
            }
          />
        </S.FormGroup>
      </S.FormWrapper>
      <PS.ButtonWrapper>
        <S.ButtonWrapper>
          <Button
            title='취소'
            textColor='var(--color-black)'
            backgroundColor='var(--color-white)'
            isBorder={true}
            borderColor='#D7D7D7'
            onClick={studentRegisterHandler.handleOnCancel}
          />
          <Button title='저장' onClick={studentRegisterHandler.handleOnSave} />
        </S.ButtonWrapper>
      </PS.ButtonWrapper>
      <Modal
        message={studentRegisterHandler.modalMessage}
        onClose={studentRegisterHandler.handleOnModalClose}
        isOpen={studentRegisterHandler.isModalVisible}
      />
    </PS.Container>
  );
}

export default StudentEdit;
