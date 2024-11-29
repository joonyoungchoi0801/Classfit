import * as S from './AchievementList.styles';
import { useState } from 'react';

function AchievementList() {
  const [filter, setFilter] = useState('전체');

  const data = [
    {
      type: '월간',
      class: '중3-A',
      test: '월말테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '주간',
      class: '중1-C',
      test: '영어퀴즈테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '월간',
      class: '중3-A',
      test: '월말테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '주간',
      class: '중1-C',
      test: '영어퀴즈테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '월간',
      class: '중3-A',
      test: '월말테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '주간',
      class: '중1-C',
      test: '영어퀴즈테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '월간',
      class: '중3-A',
      test: '월말테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '주간',
      class: '중1-C',
      test: '영어퀴즈테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '월간',
      class: '중3-A',
      test: '월말테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '주간',
      class: '중1-C',
      test: '영어퀴즈테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '월간',
      class: '중3-A',
      test: '월말테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
    {
      type: '주간',
      class: '중1-C',
      test: '영어퀴즈테스트',
      teacher: '김나나',
      date: '24.11.15',
    },
  ];

  const filterData = ['전체', '월별', '주간', '데일리', '기타'];

  return (
    <S.Container>
      <S.Header>
        <S.RegisterWrapper>
          <S.RegisterButton>성적등록</S.RegisterButton>
        </S.RegisterWrapper>

        <S.FilterWrapper>
          <S.SelectBox>
            <select>
              <option value='전체 클래스'>전체 클래스</option>
              <option value='중3-A'>중3-A</option>
              <option value='중1-C'>중1-C</option>
            </select>
          </S.SelectBox>
          <S.SearchWrapper>
            <S.SelectBox>
              <select>
                <option value='강사명'>강사명</option>
                <option value='김나나'>김나나</option>
                <option value='박선호'>박선호</option>
              </select>
            </S.SelectBox>
            <S.SearchBox>
              <S.Input type='text' placeholder='검색어 입력' />
              <S.Button>검색</S.Button>
            </S.SearchBox>
          </S.SearchWrapper>
        </S.FilterWrapper>
      </S.Header>

      <S.FilterTabs>
        {filterData.map((tab) => (
          <S.FilterButton
            key={tab}
            isActive={filter === tab}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </S.FilterButton>
        ))}
      </S.FilterTabs>

      <S.List>
        {data.map((item, index) => (
          <S.ListItem key={index}>
            <S.TitleWrapper>
              <S.Tag isMonthly={item.type === '월간'}>{item.type}</S.Tag>
              <S.Text>{item.class}</S.Text>
              <S.Text>{item.test}</S.Text>
            </S.TitleWrapper>
            <S.TeacherWrapper>
              <S.Text>{item.teacher}</S.Text>
              <S.Text>{item.date}</S.Text>
            </S.TeacherWrapper>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}

export default AchievementList;
