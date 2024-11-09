import * as S from './StudentList.styles';
import Button from '@/components/button';
import { useState } from 'react';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import CheckBoxIcon from '@/assets/info/checkBox.svg';
import SearchIcon from '@/assets/info/search.svg';

function StudentList() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const students = [
    { id: 1, name: '김예은', status: '휴원생', phone: '010-0000-0000' },
    { id: 2, name: '방예원', status: '재원생', phone: '010-0000-0000' },
    { id: 3, name: '백재혁', status: '휴원생', phone: '010-0000-0000' },
    { id: 4, name: '심유정', status: '재원생', phone: '010-0000-0000' },
    { id: 5, name: '손화영', status: '휴원생', phone: '010-0000-0000' },
    { id: 6, name: '이예린', status: '휴원생', phone: '010-0000-0000' },
    { id: 7, name: '임소현', status: '재원생', phone: '010-0000-0000' },
    { id: 8, name: '최준영', status: '재원생', phone: '010-0000-0000' },
    { id: 9, name: '이예린', status: '휴원생', phone: '010-0000-0000' },
    { id: 10, name: '임소현', status: '재원생', phone: '010-0000-0000' },
    { id: 11, name: '최준영', status: '재원생', phone: '010-0000-0000' },
  ];

  const handleSelect = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>학생목록</S.Title>
      </S.TitleWrapper>
      <S.ButtonWrapper>
        <Button
          title='삭제'
          textColor={selectedRows.length > 0 ? 'var(--color-white)' : '#999999'}
          backgroundColor={
            selectedRows.length > 0 ? 'var(--color-blue)' : 'var(--color-white)'
          }
          borderColor='#999999'
          isBorder={selectedRows.length > 0 ? false : true}
          onClick={() => { }}
        />
      </S.ButtonWrapper>
      <S.Table>
        <S.TableHeader>
          <S.TableCell $isHeader={true}>
            <S.InputContainer>
              <S.BtnIcon src={SearchIcon} />
              <S.Input placeholder='이름, 클래스명 등 자유롭게 검색해보세요 !' />
            </S.InputContainer>
          </S.TableCell>
          <S.TableCell $isHeader={true}>상태</S.TableCell>
          <S.TableCell $isHeader={true}>학생전화번호</S.TableCell>
          <S.TableCell $isHeader={true}>관리</S.TableCell>
        </S.TableHeader>

        {students.map((student) => (
          <S.TableRow
            key={student.id}
            $isSelected={selectedRows.includes(student.id)}
          >
            <S.TableCell $alignLeft={true}>
              <S.IconWrapper
                $alignLeft={true}
                onClick={() => handleSelect(student.id)}
              >
                {selectedRows.includes(student.id) ? (
                  <S.BtnIcon src={SelectedCheckBoxIcon} />
                ) : (
                  <S.BtnIcon src={CheckBoxIcon} />
                )}
                {student.name}
              </S.IconWrapper>
            </S.TableCell>
            <S.TableCell>{student.status}</S.TableCell>
            <S.TableCell>{student.phone}</S.TableCell>
            <S.TableCell>
              <S.EditWrapper>
                <S.EditButton>수정</S.EditButton>
                <S.EditDivider>|</S.EditDivider>
                <S.EditButton>삭제</S.EditButton>
              </S.EditWrapper>
            </S.TableCell>
          </S.TableRow>
        ))}
      </S.Table>
    </S.Container>
  );
}

export default StudentList;
