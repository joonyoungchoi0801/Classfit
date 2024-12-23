import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  padding-bottom: 1rem;
  @media (max-width: 76.8rem) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.label<{ $color?: string; $size?: string }>`
  color: ${({ $color }) => $color || 'var(--color-black)'};
  font-size: ${({ $size }) => $size || '1.8rem'};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1rem;
`;

export const Sublabel = styled.label<{ $color?: string }>`
  color: ${({ $color }) => $color || '#7e7e7e'};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1rem;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  padding-top: 3rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 0.1rem solid #d5d7dd;
  border-radius: 1rem;
  font-size: 1.6rem;
  height: 4rem;
  align-items: center;
  background-color: var(--color-white);
  &::placeholder {
    color: #8a91a1;
    opacity: 1;
  }
`;
export const TextWithIcon = styled.div<{ $isSelected: boolean }>`
  width: 100%;
  padding-right: 4rem;
  padding: 1rem;
  border: 0.1rem solid #d5d7dd;
  border-radius: 1rem;
  height: 4rem;
  font-size: 1.6rem;
  color: ${({ $isSelected }) =>
    $isSelected ? 'var(--color-black)' : '#8a91a1'};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 1rem; /* Input 오른쪽 끝에서 간격 */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* 클릭 방지 */
  color: var(--color-blue); /* 아이콘 색상 */
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem 0;
`;

export const _Container = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 0.1rem solid var(--color-gray);
  border-radius: 1rem;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 0.1rem solid var(--color-gray);

  /* label {
    display: flex;
    align-items: center;

    input[type='checkbox'] {
      margin-right: 8px;
    }
  } */
`;

export const List = styled.div`
  max-height: 32.6rem;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 0.1rem solid var(--color-gray);

  &:last-child {
    border-bottom: none;
  }

  input[type='checkbox'] {
    margin-right: 10px;
  }
`;

export const ListText = styled.span<{ $padding?: string }>`
  text-align: center;
  padding: ${({ $padding }) => $padding || '0 1rem'};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TextArea = styled.textarea<{
  $height?: string;
  $marginTop?: string;
}>`
  width: 100%;
  height: ${({ $height }) => $height || '8rem'};
  margin-top: ${({ $marginTop }) => $marginTop || '0'};
  padding: 2rem;
  border: 0.1rem solid var(--color-gray);
  border-radius: 1rem;
  font-size: 1.6rem;
  resize: vertical;
  outline: none;
  box-shadow: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const OpItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  background-color: var(--color-white);
  border: 0.1rem solid var(--color-gray);
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
`;

export const CalendarInfoWrapper = styled.div`
  color: var(--text-primary, rgba(0, 0, 0, 0.87));
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-size: 1.5129rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.0204rem;
  padding: 1rem 3rem;
  padding-top: 0;
`;

export const CalendarButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
  padding: 2rem 3rem;
`;
