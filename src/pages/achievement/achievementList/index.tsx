import * as S from './AchievementList.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from '@/components/dropDown';
import ClassDropDown from '@/components/dropDown/classDropDown';
import ImageIcon from '@/components/imageIcon';
import useClassList from '@/hooks/useClassList';
import { ExamData } from '@/types/exam.type';
import { findExam } from '@/api/examAPI';
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
  const [filteredData, setFilteredData] = useState<ExamData[]>([]);
  const [previousFilteredData, setPreviousFilteredData] = useState<ExamData[]>(
    []
  );
  const [displayData, setDisplayData] = useState<ExamData[]>([]);
  const [searchFilter, setSearchFilter] = useState('강사명');
  const navigate = useNavigate();
  const [mainClass, setMainClass] = useState('');
  const [data, setData] = useState<ExamData[]>([]);

  const { classList } = useClassList();
  const testSearchOptions: string[] = ['강사명', '시험명'];

  const filterData: Record<string, string> = {
    전체: 'TOTAL',
    월간: 'MONTHLY',
    주간: 'WEEK',
    데일리: 'DAILY',
    기타: 'OTHER',
  };

  const reverseFilterData: Record<string, string> = {
    TOTAL: '전체',
    MONTHLY: '월간',
    WEEK: '주간',
    DAILY: '데일리',
    OTHER: '기타',
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await findExam();
      if (res.status === 200) {
        setData(res.data.data);
      } else {
        alert('성적 정보를 불러오는 데 실패했습니다.');
      }
    };
    fetchData();
  }, []);

  const handleOnChangeFilter = (newFilter: string) => {
    setFilter(newFilter);

    const _data = data.filter((item) => {
      const matchesType =
        newFilter === '전체' || item.standard === filterData[newFilter];
      let matchesSearch;

      if (searchFilter === '강사명') {
        matchesSearch = searchText === '' || item.examName.includes(searchText);
      } else {
        matchesSearch = searchText === '' || item.examName.includes(searchText);
      }

      return matchesType && matchesSearch;
    });

    setFilteredData(_data);
    setPreviousFilteredData(_data);
    setDisplayData(_data);
  };

  const handleOnChangeSearchText = (text: string) => {
    setSearchText(text);

    const _data = data.filter((item) => {
      const matchesType =
        filter === '전체' || item.standard === filterData[filter];
      let matchesSearch;

      if (searchFilter === '강사명') {
        matchesSearch = text === '' || item.examName.includes(text);
      } else {
        matchesSearch = text === '' || item.examName.includes(text);
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

  const handleOnClickSearch = () => {
    const _data = data.filter((item) => {
      const matchesType =
        filter === '전체' || item.standard === filterData[filter];
      let matchesSearch;

      if (searchFilter === '강사명') {
        matchesSearch = item.examName == searchText;
      } else {
        matchesSearch = item.examName == searchText;
      }

      return matchesType && matchesSearch;
    });

    setFilteredData(_data);
    setPreviousFilteredData(_data.length > 0 ? _data : previousFilteredData);
    setDisplayData(_data);
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
            options={Object.keys(classList) || []}
            placeholder='메인 클래스'
            onChange={(value) => {
              setMainClass(value);
            }}
          />
          <ClassDropDown
            options={classList[mainClass]}
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleOnClickSearch();
                  }
                }}
              />
              <S.Button onClick={handleOnClickSearch}>검색</S.Button>
            </S.SearchBox>
          </S.SearchWrapper>
        </S.FilterWrapper>
      </S.Header>

      <S.FilterTabs>
        {Object.keys(filterData).map((tab) => (
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
                <PS.Tag $type={item.standard}>
                  {reverseFilterData[item.standard]}
                </PS.Tag>
                <PS.Text>
                  {item.mainClassName}-{item.subClassName}
                </PS.Text>
                <PS.Text>{item.examName}</PS.Text>
              </S.TitleWrapper>
              <S.TeacherWrapper>
                <PS.Text>{item.memberId}</PS.Text>
                <PS.Text>{item.createdAt}</PS.Text>
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

export default AchievementList;
