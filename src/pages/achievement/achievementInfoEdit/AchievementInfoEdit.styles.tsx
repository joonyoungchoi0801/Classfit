import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: #fafafa;
  border-radius: 2rem;
  padding-bottom: 12rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;
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

export const Label = styled.label<{ $color?: string }>`
  color: ${({ $color }) => $color || 'var(--color-black)'};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1rem;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
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

export const Textarea = styled.textarea`
  padding: 1rem;
  border: 0.1rem solid #d5d7dd;
  border-radius: 1rem;
  font-size: 1.6rem;
  resize: none;
  height: 9.2rem;
  margin-bottom: 1rem;
  &::placeholder {
    color: #8a91a1;
    opacity: 1;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem;
`;

export const TagItem = styled.span`
  display: inline-flex;
  align-items: center;
  color: #666;
  padding: 1rem 2rem;
  border-radius: 5rem;
  border: 0.1rem solid var(--color-blue);
  font-size: 1.6rem;
  color: var(--color-blue);
  font-weight: 500;
  line-height: normal;
  gap: 1rem;
`;

export const LabelCloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 100%;
    height: auto;
  }
`;

export const TagRangeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;