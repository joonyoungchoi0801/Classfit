import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import * as S from './ReportDetail.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import ReactApexChart from 'react-apexcharts';
import { useParams } from 'react-router-dom';
import { getReportDetail } from '@/api/reportAPI';
import {
  AttendanceInfoData,
  ExamHistoryData,
  ReportDetailData,
} from '@/types/report.types';
import ImageIcon from '@/components/imageIcon';
import type { ChartState, DonutChartState } from './report.types';

function ReportDetail() {
  const { id } = useParams();

  const [state, setState] = useState<ChartState>({
    series: [
      {
        name: '김나나',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: '평균',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],

    options: {
      colors: ['var(--color-blue)', '#DFEBFF', '#949494'],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
          borderRadiusApplication: 'end',
          columnWidth: '30px',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          '24.11.07',
          '24.11.07',
          '24.11.07',
          '24.11.07',
          '24.11.07',
          '24.11.07',
          '24.11.07',
          '24.11.07',
          '24.11.07',
        ],
      },
      yaxis: {
        title: {
          text: '점수',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' 점';
          },
        },
      },
    },
  });

  const [donutState, setDonutState] = useState<DonutChartState>({
    series: [75, 25],

    options: {
      colors: ['var(--color-blue)', '#DFEBFF', '#949494'],
      plotOptions: {
        pie: {
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 500,
          },
          customScale: 1.0,
          donut: {
            labels: {
              show: true, // 레이블 표시 여부
              name: {
                show: true,
                fontSize: '16px',
                color: '#333',
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: '22px',
                color: '#666',
                offsetY: 10,
                formatter: (val) => `${val}`, // 값 포맷
              },
              total: {
                show: true,
                showAlways: true,
                label: '총 일수',
                fontSize: '22px',
                color: 'var(--color-blue)',
                fontWeight: 700,
              },
            },
          },
        },
      },
      labels: ['출석', '지각', '결석'],
      chart: {
        type: 'donut',
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  const [reportDetailData, setReportDetailData] = useState<ReportDetailData>();
  const [attendanceInfoList, setAttendanceInfoList] = useState<
    Record<string, number>
  >({});
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const updateDonutChart = (data: AttendanceInfoData[]) => {
    data.forEach((item) => {
      setAttendanceInfoList((prevState) => ({
        ...prevState,
        [item.attendanceStatus]: item.attendanceCount,
      }));
    });
    const presentCount = data
      .filter((item) => item.attendanceStatus === 'PRESENT')
      .reduce((sum, item) => sum + item.attendanceCount, 0);

    const lateCount = data
      .filter((item) => item.attendanceStatus === 'LATE')
      .reduce((sum, item) => sum + item.attendanceCount, 0);

    const absentCount = data
      .filter((item) => item.attendanceStatus === 'ABSENT')
      .reduce((sum, item) => sum + item.attendanceCount, 0);

    setDonutState((prevState) => ({
      ...prevState,
      series: [presentCount, lateCount, absentCount],
    }));
  };

  const updateLineChart = (
    studentName: string,
    examHistoryData: ExamHistoryData[],
    includeAverage: boolean
  ) => {
    const filteredData = examHistoryData.filter(
      (item) => item.standard !== 'EVALUATION'
    );

    const scoreData = filteredData.map((item) => {
      if (item.standard === 'PF') {
        if (item.score === -3) {
          return 100;
        } else {
          return 0;
        }
      }
      return item.score;
    });

    const averageData = filteredData.map((item) => item.average);
    const categories = filteredData.map((item) => item.examName);

    setState((prevState) => {
      const updatedSeries = includeAverage
        ? [
            {
              name: studentName || '',
              data: scoreData,
            },
            {
              name: '평균',
              data: averageData,
            },
          ]
        : [
            {
              name: studentName || '',
              data: scoreData,
            },
          ];

      return {
        ...prevState,
        series: updatedSeries,
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.options.xaxis,
            categories: categories,
          },
        },
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const res = await getReportDetail(Number(id));
          if (res.status == 200) {
            setReportDetailData(res.data.data);
            updateDonutChart(res.data.data.attendanceInfoList);
            updateLineChart(
              res.data.data.studentName,
              res.data.data.examHistoryList,
              res.data.data.includeAverage
            );
          } else {
            alert('정보를 불러오는 데 실패하였습니다.');
          }
        } catch (error) {
          console.error(error);
          alert('정보를 불러오는 데 실패하였습니다.');
        }
      } else {
        alert('정보를 불러오는 데 실패하였습니다.');
      }
      setIsInitialized(true);
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <PS.RowWrapper>
          <PS.Name2 $size='1.8rem'>{reportDetailData?.studentName}</PS.Name2>
          <S.PaddingWrapper>
            <PS.Name2 $size='1.8rem'>|</PS.Name2>
          </S.PaddingWrapper>
          <PS.Name2 $size='1.8rem'>
            {reportDetailData?.mainClassName}-{reportDetailData?.subClassName}
          </PS.Name2>
        </PS.RowWrapper>
        <S.BoldText>{reportDetailData?.reportName}</S.BoldText>
        <PS.Period>
          평가기간 {reportDetailData?.startDate} ~ {reportDetailData?.endDate}
        </PS.Period>
      </S.Header>
      <S.DonutSection>
        <S.LabelWrapper>
          <S.Label $color='var(--color-blue)' $size='2rem'>
            출석
          </S.Label>
        </S.LabelWrapper>
        <div
          style={{
            position: 'relative',
            width: '300px',
          }}
        >
          {isInitialized && (
            <ReactApexChart
              options={donutState.options}
              series={donutState.series}
              type='donut'
            />
          )}
        </div>
        <S.DonutLabelWrapper>
          <S._DonutLabelWrapper>
            <S.DonutLabel>
              <ImageIcon name='CircleBlue' size='2rem' />
              출석 <S.Gap />
              {attendanceInfoList['PRESENT'] || 0}
            </S.DonutLabel>

            <S.DonutLabel>
              <ImageIcon name='CircleGray' size='2rem' />
              결석
              <S.Gap />
              {attendanceInfoList['ABSENT'] || 0}
            </S.DonutLabel>
            <S.DonutLabel>
              <ImageIcon name='CircleLightBlue' size='2rem' />
              지각
              <S.Gap />
              {attendanceInfoList['LATE'] || 0}
            </S.DonutLabel>
          </S._DonutLabelWrapper>
        </S.DonutLabelWrapper>
      </S.DonutSection>
      <S.BarSection>
        <S.LabelWrapper>
          <S.Label $color='var(--color-blue)' $size='2rem'>
            성적
          </S.Label>
        </S.LabelWrapper>
        {isInitialized && (
          <ReactApexChart
            options={state.options}
            series={state.series}
            type='bar'
            height={350}
          />
        )}
      </S.BarSection>
      <S.LabelWrapper>
        <S.Label>종합의견</S.Label>
      </S.LabelWrapper>
      <S.Sublabel>
        종합의견은 선택자 대상자 전체에게 동일하게 보여집니다.
      </S.Sublabel>
      <S.TextArea
        $height='20rem'
        id='textarea'
        value={reportDetailData?.overallOpinion}
        readOnly
        rows={5}
        placeholder='작성된 의견이 없습니다'
      />
      <S.LabelWrapper>
        <S.Label>개별의견</S.Label>
      </S.LabelWrapper>
      <S.Sublabel>선택한 대상자에게만 보여집니다.</S.Sublabel>
      <S.TextArea
        $height='20rem'
        id='textarea'
        value={reportDetailData?.studentOpinion}
        rows={5}
        placeholder='작성된 의견이 없습니다'
        readOnly
      />
    </S.Container>
  );
}

export default ReportDetail;
