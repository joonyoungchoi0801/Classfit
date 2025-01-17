import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 15rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.6rem;
  margin-bottom: 2.2rem;
`;

export const BoldText = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PaddingWrapper = styled.div`
  padding: 0 1rem;
`;

export const DonutSection = styled.div`
  display: flex; /* Flexbox를 활성화 */
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 가로 방향 가운데 정렬 */
  border-radius: 1rem;
  border: 0.1rem solid var(--color-gray);
  margin-bottom: 2.2rem;
  padding: 0 2rem;
  padding-bottom: 1rem;
`;

export const BarSection = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 0.1rem solid var(--color-gray);
  padding: 0 2rem;
  margin-bottom: 2.2rem;
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
  width: 100%;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: flex-start;
  /* align-items: center; */
  padding-top: 3rem;
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
  resize: none;
  outline: none;
  box-shadow: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const DonutLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  border-radius: 2rem;
  background-color: #fafafa;
`;

export const _DonutLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5.5rem;
`;

export const DonutLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
`;

export const Gap = styled.div`
  width: 0.5rem;
`;
