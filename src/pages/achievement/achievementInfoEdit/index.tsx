import Path from '@/components/path';
import * as S from './AchievementInfoEdit.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import DropDown from '@/components/dropDown';
import Button from '@/components/button';
import useStudentRegister from '@/hooks/student/useStudentRegister';
import { STUDENT_FIELD } from '@/constants/STUDENT';
import Modal from '@/components/modal';
import ClassDropDown from '@/components/dropDown/classDropDown';
import CloseIcon from '@/assets/label/close.svg';

function AchievementInfoEdit() {
  const genderLst = ['남', '여'];
  const studentRegisterHandler = useStudentRegister();

  return (
    <PS.Container>
      <PS.ButtonWrapper>
        <S.ButtonWrapper>
          <Button
            title='삭제'
            textColor='var(--color-blue)'
            backgroundColor='var(--color-white)'
            isBorder={true}
            borderColor='var(--color-blue)'
            onClick={studentRegisterHandler.handleOnCancel}
          />
          <Button title='저장' onClick={studentRegisterHandler.handleOnSave} />
        </S.ButtonWrapper>
      </PS.ButtonWrapper>
      <S.FormWrapper>
        <S.LabelWrapper>
          <S.Label>클래스 선택</S.Label>
          <S.Label $color='var(--color-blue)'>(필수)</S.Label>
        </S.LabelWrapper>

        <S.Row>
          <S.FormGroup>
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
            {/* <S.Label>클래스</S.Label> */}
            <ClassDropDown
              options={
                studentRegisterHandler.classInfo[
                  studentRegisterHandler.studentData.grade
                ]
              }
              // value={studentRegisterHandler.studentData.subClassList}
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
          <S.FormGroup>
            <S.LabelWrapper>
              <S.Label>시험 날짜</S.Label>
              <S.Label $color='var(--color-blue)'>(필수)</S.Label>
            </S.LabelWrapper>
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
          <S.FormGroup>
            <S.LabelWrapper>
              <S.Label>채점 기준</S.Label>
              <S.Label $color='var(--color-blue)'>(필수)</S.Label>
            </S.LabelWrapper>
            <S.Row>
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
              <S.Input
                placeholder='점수'
                value={studentRegisterHandler.studentData.name}
                onChange={(e) =>
                  studentRegisterHandler.handleOnChangeValue(
                    STUDENT_FIELD.NAME,
                    e.target.value
                  )
                }
              />
            </S.Row>
          </S.FormGroup>
        </S.Row>
        <S.FormGroup>
          <S.LabelWrapper>
            <S.Label>시험 정보</S.Label>
            <S.Label $color='var(--color-blue)'>(필수)</S.Label>
          </S.LabelWrapper>
          <S.Row>
            <S.FormGroup style={{ flex: 1 }}>
              <DropDown
                options={genderLst}
                value={studentRegisterHandler.studentData.gender}
                placeholder='분류 선택'
                onChange={(value) =>
                  studentRegisterHandler.handleOnChangeGenderValue(
                    STUDENT_FIELD.GENDER,
                    value
                  )
                }
              />
            </S.FormGroup>

            <S.FormGroup style={{ flex: 2 }}>
              <S.Input
                placeholder='시험명 입력'
                value={studentRegisterHandler.studentData.name}
                onChange={(e) =>
                  studentRegisterHandler.handleOnChangeValue(
                    STUDENT_FIELD.NAME,
                    e.target.value
                  )
                }
              />
            </S.FormGroup>
          </S.Row>
        </S.FormGroup>
        <S.Row>
          <S.FormGroup style={{ flex: 1 }}>
            <S.Label>시험 범위</S.Label>

            <PS.SearchBox>
              <PS.Input
                type='text'
                placeholder='시험 범위 입력'
                value={studentRegisterHandler.studentData.address}
                onChange={(e) =>
                  studentRegisterHandler.handleOnChangeValue(
                    STUDENT_FIELD.ADDRESS,
                    e.target.value
                  )
                }
              />
              <PS.Button>입력</PS.Button>
            </PS.SearchBox>
            <S.TagRangeWrapper>
              <S.TagItem>
                1단원 소수의 이해
                <S.LabelCloseBtn onClick={() => {}}>
                  <img src={CloseIcon} alt='close' />
                </S.LabelCloseBtn>
              </S.TagItem>
              <S.TagItem>
                1단원 소수의 이해
                <S.LabelCloseBtn onClick={() => {}}>
                  <img src={CloseIcon} alt='close' />
                </S.LabelCloseBtn>
              </S.TagItem>
            </S.TagRangeWrapper>
          </S.FormGroup>
        </S.Row>
      </S.FormWrapper>
      <Modal
        message={studentRegisterHandler.modalMessage}
        onClose={studentRegisterHandler.handleOnModalClose}
        isOpen={studentRegisterHandler.isModalVisible}
      />
    </PS.Container>
  );
}

export default AchievementInfoEdit;