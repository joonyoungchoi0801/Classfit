import ManageLayout from '@/components/layout/managelayout';
import { useParams } from 'react-router-dom';
import StudentList from './studentList';
import StudentRegister from './studentRegister';

function StudentInfo() {
  const { type } = useParams();
  return (
    <ManageLayout
      children={type === 'list' ? <StudentList /> : <StudentRegister />}
    />
  );
}

export default StudentInfo;
