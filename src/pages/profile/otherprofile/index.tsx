import * as PS from '@/pages/profile/Profile.styles';
import * as S from './OtherProfile.styles';
import Button from '@/components/button';
import { useEffect, useState } from 'react';
import InviteModal from '@/components/modal/inviteModal';
import { StaffData } from '@/types/profile.types';
import { getInvitationList } from '@/api/profileAPI';

const statusMap: Record<string, string> = {
  IN_PROGRESS: '초대중',
  ACCEPTED: '수락함',
  REJECTED: '거절됨',
};

function OtherProfile() {
  const [openModal, setOpenModal] = useState(false);
  const [staffs, setStaffs] = useState<StaffData[]>([]);
  const [inviteCount, setInviteCount] = useState<number>(0);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getInvitationList();
      if (res.status === 200) {
        setStaffs(res.data.data);
        const count = res.data.data.filter(
          (item: StaffData) => item.status === 'IN_PROGRESS'
        ).length;
        setInviteCount(count);
      } else {
        alert('직원 목록을 불러오는데 실패했습니다.');
      }
    };
    fetchData();
  }, []);

  return (
    <PS.Container>
      <S.Container>
        <S.Title>멤버 초대하기</S.Title>
        <S.HeaderWrapper>
          <S.StatusTitle>초대중 ( {inviteCount}명 )</S.StatusTitle>
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
            {staffs.length == 0 ? (
              <S.Row>
                <S.Cell colSpan={4}>초대된 직원이 없습니다.</S.Cell>
              </S.Row>
            ) : (
              <>
                {staffs.map((row, index) => (
                  <S.Row key={index}>
                    <S.Cell>{row.staffName}</S.Cell>
                    <S.Cell>{row.email}</S.Cell>
                    <S.Cell>{row.academyName}</S.Cell>
                    <S.Cell>
                      <S.StatusLink>{statusMap[row.status]}</S.StatusLink>
                    </S.Cell>
                  </S.Row>
                ))}
              </>
            )}
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
