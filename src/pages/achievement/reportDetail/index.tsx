import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
import * as S from './ReportDetail.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import ReactApexChart from 'react-apexcharts';
import { useParams } from 'react-router-dom';

type ChartState = {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions;
};

type DonutChartState = {
  series: number[];
  options: ApexOptions;
};

function ReportDetail() {
  const { id } = useParams();
  console.log(id);

  const [state, setState] = useState<ChartState>({
    series: [
      {
        name: '손화영',
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
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end',
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
      labels: ['출석', '결석'],
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

  return (
    <S.Container>
      <S.Header>
        <PS.RowWrapper>
          <PS.Name $size='1.8rem'>손화영</PS.Name>
          <S.PaddingWrapper>
            <PS.Name $size='1.8rem'>|</PS.Name>
          </S.PaddingWrapper>
          <PS.Name $size='1.8rem'>중3-A</PS.Name>
        </PS.RowWrapper>
        <S.BoldText>11월 수학리포트</S.BoldText>
        <PS.Name>평가기간 24.11.01 ~ 24.11.30</PS.Name>
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
          <ReactApexChart
            options={donutState.options}
            series={donutState.series}
            type='donut'
          />
        </div>
      </S.DonutSection>
      <S.BarSection>
        <S.LabelWrapper>
          <S.Label $color='var(--color-blue)' $size='2rem'>
            성적
          </S.Label>
        </S.LabelWrapper>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type='bar'
          height={350}
        />
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
        // value={text}
        // onChange={handleChange}
        rows={5}
        placeholder='내용을 입력해주세요'
      />
      <S.LabelWrapper>
        <S.Label>개별의견</S.Label>
      </S.LabelWrapper>
      <S.Sublabel>선택한 대상자에게만 보여집니다.</S.Sublabel>
      <S.TextArea
        $height='20rem'
        id='textarea'
        // value={text}
        // onChange={handleChange}
        rows={5}
        placeholder='내용을 입력해주세요'
      />
    </S.Container>
  );
}

export default ReportDetail;
