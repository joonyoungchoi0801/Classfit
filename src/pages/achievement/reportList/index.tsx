import * as S from './ReportList.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassDropDown from '@/components/dropDown/classDropDown';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import ReportMainIcon from '@/assets/achievement/reportMain.svg';
import { deleteReport, getFindReport, getReportAll } from '@/api/reportAPI';
import { ReportDataWithChecked } from '@/types/report.types';
import CheckBoxIcon from '@/assets/info/checkBox.svg';
import useClassList from '@/hooks/useClassList';
import MainClassDropDown from '@/components/dropDown/mainClassDropDown';
import { formatDateToYYMMDD } from '@/utils/formatDate';

interface searchQueryProps {
  mainClassId?: number;
  subClassId?: number;
  memberName?: string;
}

function ReportList() {
  const [searchText, setSearchText] = useState(''); // 검색어 상태 추가
  const navigate = useNavigate();
  const { classList, mainClassList } = useClassList();
  const [mainClass, setMainClass] = useState<string>('');
  const [reportData, setReportData] = useState<ReportDataWithChecked[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [deleteList, setDeleteList] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<searchQueryProps>({});

  // const data = [
  //   {
  //     studentReportId: 1,
  //     studentName: '김예은',
  //     reportName: '11월 수학리포트',
  //     memberName: '김나나',
  //     createAt: '24.11.15',
  //     checked: false,
  //   },
  //   {
  //     studentReportId: 2,
  //     studentName: '김예',
  //     reportName: '11월 수학리포트',
  //     memberName: '김나나',
  //     createAt: '24.11.15',
  //     checked: false,
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getReportAll();
        if (res.status == 200) {
          const updatedData = res.data.data.map((item: any) => ({
            ...item,
            checked: false, // checked 필드 추가
          }));
          setReportData(updatedData);
          setIsInitialized(true);
        } else {
          alert('리포트 데이터를 불러오는데 실패했습니다.');
          setIsInitialized(true);
        }
      } catch (e) {
        alert('리포트 데이터를 불러오는데 실패했습니다.');
        setIsInitialized(true);
      }
    };
    if (!isInitialized) {
      fetchData();
    }
  }, []);

  const handleOnClickCheckBox = (studentReportId: number, checked: boolean) => {
    setDeleteList((prev) => {
      if (checked) {
        return prev.filter((id) => id !== studentReportId);
      } else {
        return [...prev, studentReportId];
      }
    });
    setReportData((prev) =>
      prev.map((item) =>
        item.studentReportId === studentReportId
          ? { ...item, checked: !checked }
          : item
      )
    );
  };

  const handleOnClickAllDelete = async () => {
    try {
      const res = await Promise.all(
        deleteList.map((studentReportId) => {
          return deleteReport(studentReportId);
        })
      );
      if (res.every((item) => item.status === 200)) {
        alert('리포트 삭제에 성공했습니다.');
        setDeleteList([]);
        setReportData((prev) =>
          prev.filter((item) => !deleteList.includes(item.studentReportId))
        );
      } else {
        alert('리포트 삭제에 실패했습니다.');
      }
    } catch (e) {
      alert('리포트 삭제에 실패했습니다.');
    }
  };

  const handleOnSearch = async (searchText: string) => {
    if (searchText.length === 0) {
      return;
    }
    try {
      const res = await getFindReport(
        searchQuery.mainClassId,
        searchQuery.subClassId,
        searchText
      );
      if (res.status == 200) {
        const updatedData = res.data.data.map((item: any) => ({
          ...item,
          checked: false,
        }));

        setReportData(updatedData);
      } else {
        alert('리포트 검색에 실패했습니다.');
      }
    } catch (e) {
      alert('리포트 검색에 실패했습니다.');
    }
  };

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
            <MainClassDropDown
              options={mainClassList}
              value={mainClass}
              onChange2={(value1, value2) => {
                setSearchQuery((prevQuery) => ({
                  ...prevQuery,
                  mainClassId: value1,
                }));
                setMainClass(value2);
              }}
              placeholder='메인클래스 선택'
            />
            <ClassDropDown
              options={classList[mainClass]}
              onChange2={(value1, value2) => {
                setSearchQuery((prevQuery) => ({
                  ...prevQuery,
                  subClassId: value1,
                }));
              }}
              placeholder='서브클래스 선택'
            />
          </S.SearchWrapper>
          <S.SearchWrapper>
            <S.SearchBox>
              <S.Input
                type='text'
                placeholder='이름 검색'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} // 검색어 상태 업데이트
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleOnSearch(searchText);
                  }
                }}
              />
              <S.Button
                $isActive={searchText.length > 0}
                onClick={() => handleOnSearch(searchText)}
              >
                검색
              </S.Button>
            </S.SearchBox>
          </S.SearchWrapper>
        </S.FilterWrapper>
      </S.Header>
      {isInitialized ? (
        reportData.length === 0 ? (
          <S.EmptyListSection>
            <S.ReportIcon src={ReportMainIcon} />
            <S.ReportInfoText>
              리포트를 생성해 자유롭게 관리하세요 !
            </S.ReportInfoText>
          </S.EmptyListSection>
        ) : (
          <S.ReportListSection>
            <S.ReportListHeader>
              <PS.RegisterButton
                $color={
                  deleteList.length == 0 ? '#E5E5E5' : 'var(--color-black)'
                }
                onClick={handleOnClickAllDelete}
              >
                삭제
              </PS.RegisterButton>
            </S.ReportListHeader>
            <S.ReportList>
              {reportData.map((item) => (
                <S.ReportItem
                  key={item.studentReportId}
                  onClick={() =>
                    navigate(
                      `/manage/achievement/report/detail/${item.studentReportId}`
                    )
                  }
                >
                  <PS.RowWrapper>
                    <PS.IconWrapper
                      $alignLeft={true}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleOnClickCheckBox(
                          item.studentReportId,
                          item.checked
                        );
                      }}
                    >
                      {item.checked ? (
                        <PS.BtnIcon src={SelectedCheckBoxIcon} />
                      ) : (
                        <PS.BtnIcon src={CheckBoxIcon} />
                      )}
                    </PS.IconWrapper>
                    <PS.Name>{item.studentName}</PS.Name>
                    <S.ReportName>{item.reportName}</S.ReportName>
                  </PS.RowWrapper>
                  <S.MoreInfoWrapper>
                    <PS.Text>{item.ReportCreatedBy}</PS.Text>
                    <PS.Text>{formatDateToYYMMDD(item.createAt)}</PS.Text>
                  </S.MoreInfoWrapper>
                </S.ReportItem>
              ))}
            </S.ReportList>
          </S.ReportListSection>
        )
      ) : (
        <div></div>
      )}
    </S.Container>
  );
}

export default ReportList;
