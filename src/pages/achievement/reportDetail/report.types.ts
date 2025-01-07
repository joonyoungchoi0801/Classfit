import { ApexOptions } from 'apexcharts';

export interface ChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions;
}

export interface DonutChartState {
  series: number[];
  options: ApexOptions;
}
