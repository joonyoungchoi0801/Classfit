import * as S from './AchievementList.styles';
import { useState } from 'react';

function AchievementList() {
  const [filter, setFilter] = useState('전체');

  // 더미 데이터
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
    // 데이터 추가 가능
  ];

  return (
    <S.Container>
      <S.Header>
        <S.SelectBox>
          <select>
            <option value='전체 클래스'>전체 클래스</option>
            <option value='중3-A'>중3-A</option>
            <option value='중1-C'>중1-C</option>
          </select>
        </S.SelectBox>
        <S.SelectBox>
          <select>
            <option value='강사명'>강사명</option>
            <option value='김나나'>김나나</option>
            <option value='박선호'>박선호</option>
          </select>
        </S.SelectBox>
        <S.SearchBox>
          <input type='text' placeholder='검색어 입력' />
          <button>검색</button>
        </S.SearchBox>
        <S.RegisterButton>성적등록</S.RegisterButton>
      </S.Header>

      <S.FilterTabs>
        {['전체', '월별', '주간', '데일리', '기타'].map((tab) => (
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
            <S.Tag isMonthly={item.type === '월간'}>{item.type}</S.Tag>
            <S.Text>{item.class}</S.Text>
            <S.Text>{item.test}</S.Text>
            <S.Text>{item.teacher}</S.Text>
            <S.Text>{item.date}</S.Text>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}

export default AchievementList;
