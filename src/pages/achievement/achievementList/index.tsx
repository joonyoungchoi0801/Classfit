import { AchievementData } from '@/types/achievement.type';
import * as S from './AchievementList.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from '@/components/dropDown';
import ClassDropDown from '@/components/dropDown/classDropDown';
import ImageIcon from '@/components/imageIcon';
const data = [
  {
    type: '데일리',
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
    teacher: '박선호',
    date: '24.11.15',
  },
  {
    type: '데일리',
    class: '중1-C',
    test: '영어퀴즈테스트',
    teacher: '박선호',
    date: '24.11.15',
  },
  // {
  //   type: '기타',
  //   class: '중3-A',
  //   test: '월말테스트',
  //   teacher: '김나나',
  //   date: '24.11.15',
  // },
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
    teacher: '박선호',
    date: '24.11.15',
  },
  {
    type: '주간',
    class: '중1-C',
    test: '영어퀴즈테스트',
    teacher: '박선호',
    date: '24.11.15',
  },
  // {
  //   type: '기타',
  //   class: '중3-A',
  //   test: '월말테스트',
  //   teacher: '김나나',
  //   date: '24.11.15',
  // },
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
    teacher: '박선호',
    date: '24.11.15',
  },
  {
    type: '주간',
    class: '중1-C',
    test: '영어퀴즈테스트',
    teacher: '박선호',
    date: '24.11.15',
  },
];

function AchievementList() {
  const [filter, setFilter] = useState('전체');
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState<AchievementData[]>(data);
  const [previousFilteredData, setPreviousFilteredData] =
    useState<AchievementData[]>(data);
  const [displayData, setDisplayData] = useState<AchievementData[]>(data);
  const [searchFilter, setSearchFilter] = useState('강사명');
  const navigate = useNavigate();

  const testMainClass: string[] = ['1학년', '2학년', '3학년'];
  const testSearchOptions: string[] = ['강사명', '시험명'];
  const testSubClass: { subClassId: number; subClassName: string }[] = [
    { subClassId: 0, subClassName: 'A반' },
    { subClassId: 1, subClassName: 'B반' },
  ];

  const filterData = ['전체', '월간', '주간', '데일리', '기타'];

  const handleOnChangeFilter = (newFilter: string) => {
    setFilter(newFilter);

    const _data = data.filter((item) => {
      const matchesType = newFilter === '전체' || item.type === newFilter;
      let matchesSearch;

      if (searchFilter === '강사명') {
        matchesSearch = searchText === '' || item.teacher.includes(searchText);
      } else {
        matchesSearch = searchText === '' || item.test.includes(searchText);
      }

      return matchesType && matchesSearch;
    });

    setFilteredData(_data);
    setPreviousFilteredData(_data.length > 0 ? _data : previousFilteredData);
    setDisplayData(_data);
  };

  const handleOnChangeSearchText = (text: string) => {
    setSearchText(text);

    const _data = data.filter((item) => {
      const matchesType = filter === '전체' || item.type === filter;
      let matchesSearch;

      if (searchFilter === '강사명') {
        matchesSearch = text === '' || item.teacher.includes(text);
      } else {
        matchesSearch = text === '' || item.test.includes(text);
      }

      return matchesType && matchesSearch;
    });

    setFilteredData(_data);
    if (_data.length === 0) {
      setDisplayData(previousFilteredData);
    } else {
      setPreviousFilteredData(_data);
      setDisplayData(_data);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <PS.RegisterWrapper>
          <PS.RegisterButton
            onClick={() => navigate(`/manage/achievement/management/register`)}
          >
            성적등록
          </PS.RegisterButton>
        </PS.RegisterWrapper>

        <S.SearchWrapper>
          <DropDown
            options={testMainClass}
            placeholder='메인 클래스'
            onChange={() => {}}
          />
          <ClassDropDown
            options={testSubClass}
            placeholder='서브 클래스'
            onChange={() => {}}
          />
        </S.SearchWrapper>

        <S.FilterWrapper>
          <S.SearchWrapper>
            <S.SelectBox>
              <DropDown
                options={testSearchOptions}
                value={searchFilter}
                placeholder='검색 기준'
                onChange={setSearchFilter}
              />
            </S.SelectBox>
            <S.SearchBox>
              <S.Input
                type='text'
                placeholder='검색어 입력'
                value={searchText}
                onChange={(e) => handleOnChangeSearchText(e.target.value)}
              />
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
            onClick={() => handleOnChangeFilter(tab)}
          >
            {tab}
          </S.FilterButton>
        ))}
      </S.FilterTabs>
      {displayData.length > 0 ? (
        <S.List>
          {displayData.map((item, index) => (
            <S.ListItem
              key={index}
              onClick={() =>
                navigate(`/manage/achievement/management/detail/${index}`)
              }
            >
              <S.TitleWrapper>
                <PS.Tag $type={item.type}>{item.type}</PS.Tag>
                <PS.Text>{item.class}</PS.Text>
                <PS.Text>{item.test}</PS.Text>
              </S.TitleWrapper>
              <S.TeacherWrapper>
                <PS.Text>{item.teacher}</PS.Text>
                <PS.Text>{item.date}</PS.Text>
              </S.TeacherWrapper>
            </S.ListItem>
          ))}
        </S.List>
      ) : (
        <S.EmptyListSection>
          <ImageIcon name='AchievementEmptyMain' size='15.6rem' />
          <S.AchievementInfoText>검색된 결과가 없습니다.</S.AchievementInfoText>
        </S.EmptyListSection>
      )}
    </S.Container>
  );
}
