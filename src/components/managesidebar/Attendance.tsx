import { useState } from 'react';
import * as S from './ManageSidebar.styles';
import downArrow from '@/assets/managesidebar/downarrow.svg';
import rightArrow from '@/assets/managesidebar/rightarrow.svg';
import plusIcon from '@/assets/managesidebar/plus.svg';
import bluePlusIcon from '@/assets/managesidebar/blueplus.svg';
import kebabIcon from '@/assets/managesidebar/kebab.svg';
import { useNavigate, useParams } from 'react-router-dom';

const gradeData = [
  {
    grade: 1,
    class: [{ class: 'A반' }, { class: 'B반' }, { class: 'C반' }],
  },
  {
    grade: 2,
    class: [
      { class: 'A반' },
      { class: 'B반' },
      { class: 'C반' },
      { class: 'D반' },
    ],
  },
  {
    grade: 3,
    class: [{ class: 'A반' }, { class: 'B반' }, { class: 'C반' }],
  },
];

function Attendance() {
  const { grade, class: className } = useParams<{
    grade?: string;
    class?: string;
  }>();
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState<number>(
    Number(grade?.replace(/[^0-9]/g, ''))
  );
  const [selectedClass, setSelectedClass] = useState<string>(className || '');

  const handleGradeClick = (grade: number) => {
    navigate(`/manage/attendance/${grade}학년`);
    setSelectedGrade(grade);
    setSelectedClass('');
  };

  const handleClassClick = (grade: number, className: string) => {
    navigate(`/manage/attendance/${grade}학년/${className}`);
    setSelectedClass(className);
  };

  return (
    <>
      <S.AttendanceWrapper>
        <S.AttendanceBtn>전체학생</S.AttendanceBtn>
        {gradeData.map((data, index) => (
          <S.ManageWrapper key={data.grade + index}>
            <S.GradeWrapper onClick={() => handleGradeClick(data.grade)}>
              <S.Grade>
                <S.Icon
                  src={selectedGrade === data.grade ? downArrow : rightArrow}
                  alt='down arrow'
                />
                {data.grade}학년
              </S.Grade>
              <S.PlusIcon
                src={plusIcon}
                alt='plus icon'
                $isSelected={selectedGrade === data.grade}
              />
            </S.GradeWrapper>
            {data.class.map((classData) => (
              <S.ClassWrapper
                key={classData.class + index}
                $isSelected={data.grade === selectedGrade}
                onClick={() => handleClassClick(data.grade, classData.class)}
              >
                <S.Class $isSelected={classData.class === selectedClass}>
                  {classData.class}
                </S.Class>
                <S.KebabIcon
                  src={kebabIcon}
                  alt='kebab icon'
                  $isSelected={classData.class === selectedClass}
                />
              </S.ClassWrapper>
            ))}
          </S.ManageWrapper>
        ))}
        <S.AttendanceBtn>
          <S.BtnIcon src={bluePlusIcon} alt='plus icon' />
        </S.AttendanceBtn>
      </S.AttendanceWrapper>
    </>
  );
}

export default Attendance;
