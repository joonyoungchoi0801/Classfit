import Path from '@/components/path';
import * as S from './StudentRegister.styles';
import * as PS from '@/pages/studentInfo/StudentInfo.styles';
import DropDown from '@/components/dropDown';
import Button from '@/components/button';

function StudentRegister() {
  const genderLst = ['남', '여'];
  const gradeLst = ['1학년', '2학년', '3학년'];
  const classLst = ['A반', 'B반', 'C반', 'D반', 'E반'];

  return (
    <PS.Container>
      <Path />
      <PS.TitleWrapper>
        <PS.Title>학생등록</PS.Title>
      </PS.TitleWrapper>
      <S.FormWrapper>
        <S.Row>
          <S.FormGroup>
            <S.Label>학생명</S.Label>
            <S.Input placeholder='학생이름 입력' />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>성별</S.Label>
            <DropDown
              options={genderLst}
              placeholder='성별 선택'
              onChange={(value) => console.log(value)}
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>생년월일</S.Label>
            <S.Input placeholder='YYYY-MM-DD' type='date' />
          </S.FormGroup>
        </S.Row>

        <S.Row>
          <S.FormGroup>
            <S.Label>학년</S.Label>
            <DropDown
              options={gradeLst}
              placeholder='학년 선택'
              onChange={(value) => console.log(value)}
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>클래스</S.Label>
            <DropDown
              options={classLst}
              placeholder='클래스 선택'
              onChange={(value) => console.log(value)}
            />
          </S.FormGroup>
        </S.Row>

        <S.Row>
          <S.FormGroup style={{ flex: 1 }}>
            <S.Label>주소</S.Label>
            <S.Input placeholder='주소 입력' />
          </S.FormGroup>
        </S.Row>

        <S.Row>
          <S.FormGroup>
            <S.Label>학생 전화번호</S.Label>
            <S.Input placeholder='전화번호 입력' />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>학부모 전화번호</S.Label>
            <S.Input placeholder='전화번호 입력' />
          </S.FormGroup>
        </S.Row>

        <S.FormGroup>
          <S.Label>상세정보</S.Label>
          <S.Textarea placeholder='필요한 메모를 남깁니다.' />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>상담일지</S.Label>
          <S.Textarea placeholder='필요한 메모를 남깁니다.' />
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
            onClick={() => { }}
          />
          <Button title='저장' onClick={() => { }} />
        </S.ButtonWrapper>
      </PS.ButtonWrapper>
    </PS.Container>
  );
}

export default StudentRegister;
