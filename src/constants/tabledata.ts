interface AttendanceRecord {
  date: string;
  status: string;
}

interface Student {
  name: string;
  attendance: AttendanceRecord[];
}

const mockData: Student[] = [
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '결석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '결석' },
      { date: '11/05', status: '결석' },
      { date: '11/06', status: '결석' },
      { date: '11/07', status: '결석' },
      { date: '11/08', status: '결석' },
      { date: '11/09', status: '지각' },
      { date: '11/10', status: '결석' },
      { date: '11/11', status: '결석' },
      { date: '11/12', status: '결석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '결석' },
      { date: '11/15', status: '결석' },
      { date: '11/16', status: '결석' },
      { date: '11/17', status: '결석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '결석' },
      { date: '11/20', status: '결석' },
      { date: '11/21', status: '결석' },
      { date: '11/22', status: '결석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '결석' },
      { date: '11/25', status: '결석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '결석' },
      { date: '11/28', status: '결석' },
      { date: '11/29', status: '결석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
];

export default mockData;