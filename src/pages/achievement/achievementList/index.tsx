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
import { formatDateToYYMMDD } from '@/utils/formatDate';
import MainClassDropDown from '@/components/dropDown/mainClassDropDown';

export const filterData: Record<string, string> = {
  전체: 'TOTAL',
  월간: 'MONTH',
  주간: 'WEEK',
  데일리: 'DAILY',
  기타: 'OTHER',
};

export const reverseFilterData: Record<string, string> = {
  TOTAL: '전체',
  MONTH: '월간',
  WEEK: '주간',
  DAILY: '데일리',
  OTHER: '기타',
};

function AchievementList() {
  const [filter, setFilter] = useState('전체');
  const [searchText, setSearchText] = useState('');
  const [previousFilteredData, setPreviousFilteredData] = useState<ExamData[]>(
    []
  );
  const [displayData, setDisplayData] = useState<ExamData[]>([]);
  const [searchFilter, setSearchFilter] = useState('강사명');
  const navigate = useNavigate();
  const [mainClass, setMainClass] = useState('');
  const [subClass, setSubClass] = useState('');
  const [data, setData] = useState<ExamData[]>([]);

  const { classList, totalMainClassList } = useClassList();
  const [isInitialized, setIsInitialized] = useState(false);
  const testSearchOptions: string[] = ['강사명', '시험명'];
  const [mainClassId, setMainClassId] = useState(-1);
  const [subClassId, setSubClassId] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await findExam({});
        if (res.status === 200) {
          setData(res.data.data);
          setDisplayData(res.data.data);
          setIsInitialized(true);
        } else {
          alert('데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.');
          setIsInitialized(true);
        }
      } catch (e) {
        setIsInitialized(true);
      }
    };

    fetchData();
  }, []);

  const handleOnChangeFilter = (newFilter: string) => {
    setFilter(newFilter);

    const _data = data.filter((item) => {
      const matchesType =
        newFilter === '전체' || item.examPeriod === filterData[newFilter];
      let matchesSearch;

      if (searchFilter === '강사명') {
        matchesSearch =
          searchText === '' || item.createdByName.includes(searchText);
      } else {
        matchesSearch = searchText === '' || item.examName.includes(searchText);
      }
      const matchesMainClassName =
        mainClass === '전체' || item.mainClassName.includes(mainClass);
      const matchesSubClassName =
        subClass === '전체' || item.subClassName.includes(subClass);

      return (
        matchesType &&
        matchesSearch &&
        matchesMainClassName &&
        matchesSubClassName
      );
    });

    setPreviousFilteredData(_data);
    setDisplayData(_data);
  };

  const handleOnChangeClass = (newMainClass: string, newSubClass: string) => {
    let newData = data;
    if (newMainClass != '전체' && newMainClass.length > 0) {
      newData = data.filter((item) => {
        return item.mainClassName === newMainClass;
      });
    }

    if (newSubClass != '전체' && newSubClass.length > 0) {
      newData = newData.filter((item) => {
        return item.subClassName === newSubClass;
      });
    }

    newData = newData.filter((item) => {
      const matchesType =
        filter === '전체' || item.standard === filterData[filter];

      return matchesType;
    });

    setPreviousFilteredData(newData);
    setDisplayData(newData);
  };

  const handleOnChangeSearchText = (text: string) => {
    setSearchText(text);

    const _data = data.filter((item) => {
      const matchesType =
        filter === '전체' || item.standard === filterData[filter];
      let matchesSearch;

      if (searchFilter === '강사명') {
        matchesSearch = text === '' || item.createdByName.includes(text);
      } else {
        matchesSearch = text === '' || item.examName.includes(text);
      }
      const matchesMainClassName =
        mainClass === '전체' || item.mainClassName.includes(mainClass);
      const matchesSubClassName =
        subClass === '전체' || item.subClassName.includes(subClass);

      return (
        matchesType &&
        matchesSearch &&
        matchesMainClassName &&
        matchesSubClassName
      );
    });

    if (_data.length === 0) {
      setDisplayData(previousFilteredData);
    } else {
      setPreviousFilteredData(_data);
      setDisplayData(_data);
    }
  };
  const handleOnClickSearch = async () => {
    let _data;
    _data = data.filter((item) => {
      const matchesType =
        filter === '전체' || item.standard === filterData[filter];
      let matchesSearch;

      if (searchFilter === '강사명') {
        matchesSearch = item.createdByName == searchText;
      } else {
        matchesSearch = item.examName == searchText;
      }

      const matchesMainClassName =
        mainClass === '전체' || item.mainClassName.includes(mainClass);
      const matchesSubClassName =
        subClass === '전체' || item.subClassName.includes(subClass);

      return (
        matchesType &&
        matchesSearch &&
        matchesMainClassName &&
        matchesSubClassName
      );
    });

    if (_data.length === 0) {
      // searchFilter, searchText
      const requestPayload: any = {
        searchFilter,
        searchText,
      };

      if (mainClassId !== -1) {
        requestPayload.mainClassId = mainClassId;
      }
      if (subClassId !== -1) {
        requestPayload.subClassId = subClassId;
      }

      const res = await findExam(requestPayload);
      if (res.status === 200) {
        _data = res.data.data;
      } else {
        alert('성적 정보를 불러오는 데 실패했습니다.');
      }
    }

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
          <MainClassDropDown
            options={totalMainClassList}
            value={mainClass}
            onChange2={(value1, value2) => {
              setMainClassId(value1); // mainClassId
              setMainClass(value2); // mainClassName
            }}
            placeholder='메인 클래스'
          />
          <ClassDropDown
            options={[
              { subClassId: -1, subClassName: '전체' },
              ...(classList[mainClass] || []),
            ]}
            placeholder='서브 클래스'
            onChange2={(value1, value2) => {
              setSubClassId(value1);
              handleOnChangeClass(mainClass, value2);
              setSubClass(value2);
            }}
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
      {isInitialized ? (
        displayData.length > 0 ? (
          <S.List>
            {displayData.map((item, index) => (
              <S.ListItem
                key={index}
                onClick={() =>
                  navigate(
                    `/manage/achievement/management/detail/${item.examId}`
                  )
                }
              >
                <S.TitleWrapper>
                  <PS.TagWrapper>
                    <PS.Tag $type={reverseFilterData[item.examPeriod]}>
                      {reverseFilterData[item.examPeriod]}
                    </PS.Tag>
                  </PS.TagWrapper>
                  <PS.Text>
                    {item.mainClassName}-{item.subClassName}
                  </PS.Text>
                  <PS.Text2>{item.examName}</PS.Text2>
                </S.TitleWrapper>
                <S.TeacherWrapper>
                  <PS.Text>{item.createdByName}</PS.Text>
                  <PS.Text>{formatDateToYYMMDD(item.examDate)}</PS.Text>
                </S.TeacherWrapper>
              </S.ListItem>
            ))}
          </S.List>
        ) : (
          <S.EmptyListSection>
            <ImageIcon name='AchievementEmptyMain' size='15.6rem' />
            <S.AchievementInfoText>
              조회된 결과가 없습니다.
            </S.AchievementInfoText>
          </S.EmptyListSection>
        )
      ) : (
        <div></div>
      )}
    </S.Container>
  );
}

export default AchievementList;
