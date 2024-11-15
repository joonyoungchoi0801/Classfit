import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './Path.styles';

const pathMappings: Record<string, string> = {
  manage: '학생관리',
  attendance: '출결관리',
  sms: 'SMS',
  studentinfo: '학생정보',
  list: '학생목록',
  edit: '학생목록',
  register: '학생등록',
  achievement: '성적관리',
};

function Path() {
  const location = useLocation();

  const pathItems = location.pathname
    .split('/')
    .filter((segment) => segment)
    .map((segment) => {
      const decodedSegment = decodeURIComponent(segment);
      return pathMappings[decodedSegment] || decodedSegment;
    });

  return (
    <S.PathWrapper>
      <S.PathWrapper>
        {pathItems.map((item, index) => (
          <React.Fragment key={index}>
            <S.PathItem>{item}</S.PathItem>
            {index < pathItems.length - 1 && (
              <S.PathItem> &gt; </S.PathItem>
            )}{' '}
          </React.Fragment>
        ))}
      </S.PathWrapper>
    </S.PathWrapper>
  );
}

export default Path;
