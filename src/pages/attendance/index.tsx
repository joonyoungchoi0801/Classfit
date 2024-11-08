import * as S from './Attendance.styles';
import AttendanceTable from '@/components/attendanceTable';

function Attendance() {
  return (
    <S.Container>
      <p>학생관리 {'>'} 1학년 {'>'} A반</p>
      <S.AttendanceTitle>학생 출결 관리</S.AttendanceTitle>
      <S.ButtonGroup>
        <button>SMS 보내기</button>
        <button>10월 | 출결 문서 다운</button>
        <button>편집</button>
      </S.ButtonGroup>
      <AttendanceTable />
    </S.Container>
  )
}

export default Attendance;