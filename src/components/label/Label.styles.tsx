import styled from 'styled-components';

export const LabelWrapper = styled.div`
  display: inline-flex; /* 내용에 맞는 너비만 차지하도록 설정 */
  min-width: 9.7rem; /* 필요에 따라 너비 조정 */
  width: fit-content;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #c3c3c3;
  background: var(--color-skyblue);
`;

export const LabelMessage = styled.p`
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
`;

export const LabelCloseBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  background: none;
`;
