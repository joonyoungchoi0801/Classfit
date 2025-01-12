import * as PS from '@/pages/profile/Profile.styles';
import * as S from './OtherProfile.styles';
import Button from '@/components/button';
import { useState } from 'react';
import InviteModal from '@/components/modal/inviteModal';

function OtherProfile() {
  const data = [
    {
      name: '손화영',
      email: 'classfit@gmail.com',
      team: '클래스핏영어',
      status: '초대중',
    },
    {
      name: '손화영',
      email: 'classfit@gmail.com',
      team: '클래스핏영어',
      status: '초대중',
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <PS.Container>
      <S.Container>
        <S.Title>멤버 초대하기</S.Title>
        <S.HeaderWrapper>
          <S.StatusTitle>초대중 ( 2명 )</S.StatusTitle>
          <Button title='초대하기' onClick={handleClick} />
        </S.HeaderWrapper>

        <S.Table>
          <S.TableHead>
            <S.Row>
              <S.HeaderCell>이름</S.HeaderCell>
              <S.HeaderCell>이메일</S.HeaderCell>
              <S.HeaderCell>팀</S.HeaderCell>
              <S.HeaderCell>상태</S.HeaderCell>
            </S.Row>
          </S.TableHead>
          <S.TableBody>
            {data.map((row, index) => (
              <S.Row key={index}>
                <S.Cell>{row.name}</S.Cell>
                <S.Cell>{row.email}</S.Cell>
                <S.Cell>{row.team}</S.Cell>
                <S.Cell>
                  <S.StatusLink>{row.status}</S.StatusLink>
                </S.Cell>
              </S.Row>
            ))}
          </S.TableBody>
        </S.Table>
      </S.Container>
      {openModal && (
        <InviteModal isOpen={openModal} onClose={handleModalClose} />
      )}
    </PS.Container>
  );
}

export default OtherProfile;
