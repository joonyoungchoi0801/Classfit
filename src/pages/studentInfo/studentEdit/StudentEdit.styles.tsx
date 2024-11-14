import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: #fff;
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: row;

  @media (max-width: 76.8rem) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.label`
  color: #222327;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 0.1rem solid #d5d7dd;
  border-radius: 0.4rem;
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
  border-radius: 0.4rem;
  font-size: 1.6rem;
  resize: none;
  height: 9.2rem;
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
  margin-bottom: 10rem;
`;
