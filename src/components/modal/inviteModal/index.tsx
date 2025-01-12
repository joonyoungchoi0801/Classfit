import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@/components/button';
import * as S from './InviteModal.styles';
import type { InviteModalProps } from './InviteModal.types';
import { getInvitationCode, postInvitation } from '@/api/profileAPI';

const InviteModal = ({ isOpen, onClose }: InviteModalProps) => {
  if (!isOpen) return null;
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onConfirm = async () => {
    if (!name || !email) {
      alert('이름과 이메일을 입력해주세요');
      return;
    }
    const res = await postInvitation(name, email);
    if (res.status === 200) {
      alert('초대코드를 전송했습니다');
      setName('');
      setEmail('');
    } else {
      alert('초대코드 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getInvitationCode();
      if (res.status === 200) {
        setCode(res.data.data);
      }
    };
    fetchData();
  }, []);

  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.Header>직원 초대</S.Header>
        <S.Content>
          <S.Code>초대코드 : {code}</S.Code>
          <S.MoreInfoWrapper>
            <S.FieldLabel>
              이름 <span className='required'>(필수)</span>
            </S.FieldLabel>
            <S.Input value={name} onChange={(e) => setName(e.target.value)} />
          </S.MoreInfoWrapper>
          <S.MoreInfoWrapper>
            <S.FieldLabel>
              이메일 <span className='required'>(필수)</span>
            </S.FieldLabel>
            <S.Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </S.MoreInfoWrapper>
        </S.Content>
        <S.Footer>
          <Button
            title='닫기'
            textColor={'var(--color-blue)'}
            backgroundColor={'var(--color-white)'}
            isBorder={true}
            borderColor={'var(--color-blue)'}
            onClick={onClose}
          />
          <Button
            title='초대하기'
            textColor={'var(--color-white)'}
            backgroundColor={'var(--color-blue)'}
            isBorder={false}
            onClick={onConfirm}
          />
        </S.Footer>
      </S.ModalContainer>
    </S.ModalWrapper>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default InviteModal;
