import React from 'react';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 50rem;
  background: #fff;
  border-radius: 0.6964rem;
  box-shadow: 0px 0.4rem 1.6rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
`;

export const Header = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2rem 0;
  border-top: 1px solid #e0e0e0;
  margin: 2rem 0;
  border-bottom: 0.1rem solid #e0e0e0;
  align-items: center;
`;

export const ProfileImageWrapper = styled.div`
  width: 13.022rem;
  height: 13.022rem;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #f2f5fc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ProfileImage = styled.img`
  width: 9.7143rem;
  height: 10.5722rem;
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding-left: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  justify-content: center;
`;

export const FieldLabel = styled.span`
  font-size: 1.4rem;
  color: var(--color-blue);
  min-width: 100px;
  margin-right: 1rem;
  text-align: right;
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const FieldValue = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0.5225rem 0;
`;

export const Separator = styled.span`
  padding: 0 1.393rem;
  font-size: 1.3927rem;
  color: #333;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
`;

export const InputField = styled.input`
  border: none;
  border-radius: 0.4rem;
  padding: 0.8rem;
  margin-top: 0.5rem;
  width: 100%;
  background-color: #f2f5fc;
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: 0.4rem;
  padding: 0.8rem;
  width: 100%;
  resize: none;
  height: 8rem;
  background-color: #f2f5fc;
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.7rem 0;
`;
