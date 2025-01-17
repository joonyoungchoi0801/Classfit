import { useEffect, useState } from 'react';
import * as S from './style/certificate.styles';
import errorIcon from '@/assets/auth/password/error.svg';
import { postSendEmail, postVerifyEmail } from '@/api/authAPI';
import { useNavigate } from 'react-router-dom';

function Certification() {
  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [isResendOccur, setIsResendOccur] = useState(false);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsResendOccur(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [isResendOccur]);

  const handleResend = async () => {
    if (timer > 0) return;
    try {
      alert('인증번호를 재발송했습니다.');
      const emailData = {
        email: sessionStorage.getItem('certificateEmail') || '',
        purpose: 'PASSWORD_RESET' as const,
      };
      await postSendEmail(emailData);
      setIsResendOccur(true);
      setTimer(60);
    } catch (error) {
      alert('인증번호 재발송에 실패했습니다.');
    }
  };

  const handleVerify = async () => {
    if (code.length === 8) {
      try {
        const emailData = {
          email: sessionStorage.getItem('certificateEmail') || '',
          code: code,
          purpose: 'PASSWORD_RESET' as const,
        };
        const response = await postVerifyEmail(emailData);
        sessionStorage.setItem(
          'certificateToken',
          response.data.data.emailToken
        );
        navigate('/new-password');
      } catch (error) {
        setIsError(true);
      }
    }
  };

  return (
    <S.PageWrapper>
      <S.CertificateWrapper>
        <S.LabelWrapper>
          <S.CertificateLabel>인증번호를 입력해주세요.</S.CertificateLabel>
          <S.SubLabel>
            입력하신 {sessionStorage.getItem('certificateEmail')}으로 인증번호를
            발송했어요.
          </S.SubLabel>
        </S.LabelWrapper>
        <S.CertificateInput
          placeholder='인증번호를 입력해주세요'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
        />
        <S.ResendWrapper>
          {isError && (
            <S.ErrorText>
              <S.Icon src={errorIcon} alt='error' />
              &nbsp; 인증번호가 일치하지 않습니다.
            </S.ErrorText>
          )}
          <S.Resend>
            이메일을 받지 못했다면{' '}
            <S.ResendText onClick={handleResend} $isDisabled={timer > 0}>
              재발송
            </S.ResendText>
            을 눌러주세요. ({timer}초)
          </S.Resend>
        </S.ResendWrapper>

        <S.CertificateButton
          $isDisabled={code.length !== 8}
          onClick={handleVerify}
        >
          인증하기
        </S.CertificateButton>
      </S.CertificateWrapper>
    </S.PageWrapper>
  );
}

export default Certification;
