import { useEffect, useState } from 'react';
import * as S from './ManageSidebar.styles';
import downArrow from '@/assets/managesidebar/downarrow.svg';
import rightArrow from '@/assets/managesidebar/rightarrow.svg';
import plusIcon from '@/assets/managesidebar/plus.svg';
import bluePlusIcon from '@/assets/managesidebar/blueplus.svg';
import kebabIcon from '@/assets/managesidebar/kebab.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from '@/components/popup';
import { ClassData, ClassDataForm } from './Attendance.type';
import { getClassList } from '@/api/classAPI';

// const gradeData = [
//   {
//     grade: 1,
//     class: [{ class: 'A반' }, { class: 'B반' }, { class: 'C반' }],
//   },
//   {
//     grade: 2,
//     class: [
//       { class: 'A반' },
//       { class: 'B반' },
//       { class: 'C반' },
//       { class: 'D반' },
//     ],
//   },
//   {
//     grade: 3,
//     class: [{ class: 'A반' }, { class: 'B반' }, { class: 'C반' }],
//   },
// ];

function Attendance() {
  const { grade, class: className } = useParams<{
    grade?: string;
    class?: string;
  }>();
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState<number>(
    Number(grade?.replace(/[^0-9]/g, ''))
  );
  const [classData, setClassData] = useState<ClassData>();
  const [selectedClass, setSelectedClass] = useState<string>(className || '');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [tempClassName, setTempClassName] = useState<string>('');

  useEffect(() => {
    const fetchClassList = async () => {
      try {
        const res = getClassList();
        setClassData(res.data);
      } catch (error) {
        alert('반 정보를 불러오는데 실패했습니다.');
      }
    };
    fetchClassList();
  }, []);

  const handleGradeClick = (grade: number) => {
    navigate(`/manage/attendance/${grade}학년`);
    setSelectedGrade(grade);
    setSelectedClass('');
    setIsPopupOpen(false);
  };

  const handleClassClick = (grade: number, className: string) => {
    navigate(`/manage/attendance/${grade}학년/${className}`);
    setSelectedClass(className);
    setIsPopupOpen(false);
  };

  const handleClassDelete = () => {
    setClassData((prev: ClassData) =>
      prev?.map((data: ClassDataForm) => ({
        ...data,
        subClasses: data.subClasses.filter(
          (classData) => classData.subClassName !== selectedClass
        ),
      }))
    );
    setIsPopupOpen(false);
    navigate(`/manage/attendance/${selectedGrade}학년`);
  };

  const handleClassEdit = (name: string) => {
    setClassData((prev) =>
      prev.map((data) => ({
        ...data,
        class: data.class.map((classData) => ({
          ...classData,
          class: classData.class === selectedClass ? name : classData.class,
        })),
      }))
    );
    setTempClassName('');
    setIsPopupOpen(false);
    navigate(`/manage/attendance/${selectedGrade}학년/${name}`);
  };

  return (
    <>
      <S.AttendanceWrapper>
        <S.AttendanceBtn>전체학생</S.AttendanceBtn>
        {classData.map((data, index) => (
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
                src={kebabIcon}
                alt='kebabicon'
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
                  {isEditMode && classData.class === selectedClass ? (
                    <S.ClassInput
                      type='text'
                      onChange={(e) => setTempClassName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setIsEditMode(false);
                          handleClassEdit(tempClassName);
                        }
                      }}
                    />
                  ) : (
                    classData.class
                  )}
                </S.Class>
                <S.KebabIcon
                  src={kebabIcon}
                  alt='kebab icon'
                  $isSelected={classData.class === selectedClass}
                  onClick={() => setIsPopupOpen(!isPopupOpen)}
                />
                {isPopupOpen && (
                  <Popup
                    isOpen={isPopupOpen && classData.class === selectedClass}
                    onDelete={() => handleClassDelete()}
                    onEdit={() => setIsEditMode(true)}
                  />
                )}
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
