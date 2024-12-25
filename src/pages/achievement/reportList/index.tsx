import * as S from './ReportList.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassDropDown from '@/components/dropDown/classDropDown';
import DropDown from '@/components/dropDown';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import ReportMainIcon from '@/assets/achievement/reportMain.svg';

function ReportList() {
  const [searchText, setSearchText] = useState(''); // 검색어 상태 추가
  const navigate = useNavigate();
  const testMainClass: string[] = ['1학년', '2학년', '3학년'];
  const testSubClass: { subClassId: number; subClassName: string }[] = [
    { subClassId: 0, subClassName: 'A반' },
    { subClassId: 1, subClassName: 'B반' },
  ];

  const data = [
    {
      id: 1,
      studentName: '김예은',
      reportName: '11월 수학리포트',
      teacherName: '김나나',
      date: '24.11.15',
    },
    {
      id: 2,
      studentName: '김예은',
      reportName: '11월 수학리포트',
      teacherName: '김나나',
      date: '24.11.15',
    },
    {
      id: 3,
      studentName: '김예은',
      reportName: '11월 수학리포트',
      teacherName: '김나나',
      date: '24.11.15',
    },
    {
      id: 4,
      studentName: '김예은',
      reportName: '11월 수학리포트',
      teacherName: '김나나',
      date: '24.11.15',
    },
    {
      id: 5,
      studentName: '김예은',
      reportName: '11월 수학리포트',
      teacherName: '김나나',
      date: '24.11.15',
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <PS.RegisterWrapper>
          <PS.RegisterButton
            onClick={() => navigate(`/manage/achievement/report/register`)}
          >
            생성
          </PS.RegisterButton>
        </PS.RegisterWrapper>

        <S.FilterWrapper>
          <S.SearchWrapper>
            {/* 전체 클래스 선택 */}
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
            {/* 서브 클래스 선택 */}
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
            {/* <S.SelectBox>
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
              >
                {classOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </S.SelectBox> */}
            {/* <S.SelectBox>
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
              >
                {classOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </S.SelectBox> */}
          </S.SearchWrapper>
          <S.SearchWrapper>
            <S.SearchBox>
              <S.Input
                type='text'
                placeholder='이름 검색'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} // 검색어 상태 업데이트
              />
              <S.Button>검색</S.Button>
            </S.SearchBox>
          </S.SearchWrapper>
        </S.FilterWrapper>
      </S.Header>
      {/* <S.EmptyListSection>
        <S.ReportIcon src={ReportMainIcon} />
        <S.ReportInfoText>
          리포트를 생성해 자유롭게 관리하세요 !
        </S.ReportInfoText>
      </S.EmptyListSection> */}

      <S.ReportListSection>
        <S.ReportListHeader>
          <PS.RegisterButton $color='var(--color-black)' onClick={() => {}}>
            삭제
          </PS.RegisterButton>
        </S.ReportListHeader>
        <S.ReportList>
          {data.map((item) => (
            <S.ReportItem
              key={item.id}
              onClick={() =>
                navigate(`/manage/achievement/report/detail/${item.id}`)
              }
            >
              <PS.RowWrapper>
                <PS.IconWrapper $alignLeft={true} onClick={() => {}}>
                  <PS.BtnIcon src={SelectedCheckBoxIcon} />
                </PS.IconWrapper>
                <PS.Name>{item.studentName}</PS.Name>
                <S.ReportName>{item.reportName}</S.ReportName>
              </PS.RowWrapper>
              <S.MoreInfoWrapper>
                <PS.Text>{item.teacherName}</PS.Text>
                <PS.Text>{item.date}</PS.Text>
              </S.MoreInfoWrapper>
            </S.ReportItem>
          ))}
        </S.ReportList>
      </S.ReportListSection>
    </S.Container>
  );
}

export default ReportList;
