import { AchievementData } from '@/types/achievement.type';
import * as S from './AchievementList.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from '@/components/dropDown';
import ClassDropDown from '@/components/dropDown/classDropDown';

function AchievementList() {
  const [filter, setFilter] = useState('전체'); // 타입 필터
  const [classFilter, setClassFilter] = useState('전체 클래스'); // 클래스 필터
  const [teacherFilter, setTeacherFilter] = useState('전체 강사'); // 강사 필터
  const [searchText, setSearchText] = useState(''); // 검색어 상태 추가
  const [previousFilteredData, setPreviousFilteredData] = useState<
    AchievementData[]
  >([]);
  const navigate = useNavigate();
  const testMainClass: string[] = ['1학년', '2학년', '3학년'];
  const testSearchOptions: string[] = ['강사명', '시험명'];
  const testSubClass: { subClassId: number; subClassName: string }[] = [
    { subClassId: 0, subClassName: 'A반' },
    { subClassId: 1, subClassName: 'B반' },
  ];

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

  // 필터 데이터
  const filterData = ['전체', '월간', '주간', '데일리', '기타'];
  const classOptions = ['전체 클래스', '중3-A', '중1-C'];
  const teacherOptions = ['전체 강사', '김나나', '박선호'];

  const filteredData = data.filter((item) => {
    const matchesType = filter === '전체' || item.type === filter;
    const matchesClass =
      classFilter === '전체 클래스' || item.class === classFilter;
    const matchesTeacher =
      teacherFilter === '전체 강사' || item.teacher === teacherFilter;
    const matchesSearch = searchText === '' || item.test.includes(searchText); // 검색 조건 추가
    return matchesType && matchesClass && matchesTeacher && matchesSearch;
  });

  // `filteredData`가 비었을 때 이전 데이터를 유지
  useEffect(() => {
    if (filteredData.length > 0) {
      setPreviousFilteredData(filteredData); // 이전 필터링된 데이터 업데이트
    }
  }, [filteredData]);

  const displayData =
    filteredData.length > 0 ? filteredData : previousFilteredData;

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
            //   value={studentRegisterHandler.studentData.grade}
            placeholder='메인 클래스'
            onChange={
              // (value) =>
              // studentRegisterHandler.handleOnChangeValue(
              //   STUDENT_FIELD.GRADE,
              //   value
              // )
              () => {}
            }
          />
          <ClassDropDown
            options={testSubClass}
            placeholder='서브 클래스'
            onChange={
              // (value) =>
              // studentRegisterHandler.handleOnChangeSubClassValue(
              //   STUDENT_FIELD.SUB_CLASS_LIST,
              //   value
              // )
              () => {}
            }
          />
        </S.SearchWrapper>

        <S.FilterWrapper>
          <S.SearchWrapper>
            {/* <S.SelectBox>
              <select
                value={teacherFilter}
                onChange={(e) => setTeacherFilter(e.target.value)}
              >
                {teacherOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </S.SelectBox> */}
            <S.SelectBox>
              <DropDown
                options={testSearchOptions}
                value='강사명'
                placeholder='메인 클래스'
                onChange={
                  // (value) =>
                  // studentRegisterHandler.handleOnChangeValue(
                  //   STUDENT_FIELD.GRADE,
                  //   value
                  // )
                  () => {}
                }
              />
            </S.SelectBox>
            <S.SearchBox>
              <S.Input
                type='text'
                placeholder='검색어 입력'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} // 검색어 상태 업데이트
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
            onClick={() => setFilter(tab)}
          >
            {tab}
          </S.FilterButton>
        ))}
      </S.FilterTabs>

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
    </S.Container>
  );
}

export default AchievementList;
