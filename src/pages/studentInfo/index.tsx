import ManageLayout from '@/components/layout/managelayout';
import { useLocation, useParams } from 'react-router-dom';
import StudentList from './studentList';
import StudentRegister from './studentRegister';
import { STUDENT_INFO_PATH } from '@/constants/STUDENT';
import StudentEdit from './studentEdit';

function StudentInfo() {
  const { type } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const studentId = searchParams.get('studentId'); // 쿼리 파라미터에서 studentId 가져오기

  return (
    <ManageLayout>
      {type === STUDENT_INFO_PATH.LIST ? (
        <StudentList />
      ) : type === STUDENT_INFO_PATH.REGISTER ? (
        <StudentRegister />
      ) : type === STUDENT_INFO_PATH.EDIT ? (
        <StudentEdit studentId={studentId || ''} />
      ) : null}
    </ManageLayout>
  );
}

export default StudentInfo;
