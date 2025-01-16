import { useEffect, useState } from 'react';
import * as S from './ManageSidebar.styles';
import downArrow from '@/assets/managesidebar/downarrow.svg';
import rightArrow from '@/assets/managesidebar/rightarrow.svg';
import bluePlusIcon from '@/assets/managesidebar/blueplus.svg';
import kebabIcon from '@/assets/managesidebar/kebab.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from '@/components/popup';
import { ClassDataForm } from './Attendance.type';
import { getClassList } from '@/api/classAPI';
import { deleteSubClass, patchSubClass, postSubClass } from '@/api/subclassAPI';
import {
  deleteMainClass,
  patchMainClass,
  postMainClass,
} from '@/api/mainclassAPI';
import axios from 'axios';
import useClassStore from '@/store/classStore';
import useSubClassShowStore from '@/store/subClassShowStore';
import MainPopup from '../popup/MainPopup';

function Attendance() {
  const { grade, class: className } = useParams<{
    grade?: string;
    class?: string;
  }>();
  const { setMainClassId, setSubClassId } = useClassStore();

  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState<string>('');
  const [classData, setClassData] = useState<ClassDataForm[] | undefined>();
  const [selectedClass, setSelectedClass] = useState<string>(className || '');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [tempClassName, setTempClassName] = useState<string>('');
  const [tempNewClassName, setTempNewClassName] = useState<string>('');
  const [tempMainClassName, setTempMainClassName] = useState<string>('');
  const [isMainClassAdd, setIsMainClassAdd] = useState<boolean>(false);
  const [isSubClassAdd, setIsSubClassAdd] = useState<boolean>(false);
  const [isMainClassPopup, setIsMainClassPopup] = useState<boolean>(false);
  const [isMainClassEdit, setIsMainClassEdit] = useState<boolean>(false);
  const [mainClassEdit, setMainClassEdit] = useState<string>('');
  const { isSubClassShow, setIsSubClassShow } = useSubClassShowStore();

  const fetchClassList = async () => {
    try {
      const res = await getClassList();
      setClassData(res.data.data);
    } catch (error) {
      alert('반 정보를 불러오는데 실패했습니다.');
    }
  };

  useEffect(() => {
    fetchClassList();
  }, []);

  const handleGradeClick = (grade: string) => {
    setSelectedGrade(grade);
    setSelectedClass('');
    setIsPopupOpen(false);
    setIsSubClassAdd(false);
    setIsMainClassAdd(false);
    if (grade !== selectedGrade) {
      navigate(`/manage/attendance/${grade}`);
      setIsSubClassShow(true);
    } else {
      setIsSubClassShow(!isSubClassShow);
    }
  };

  const handleClassClick = (
    grade: string,
    className: string,
    mainClassId: number,
    subClassId: number
  ) => {
    navigate(`/manage/attendance/${grade}/${className}`);
    setSelectedClass(className);
    setIsPopupOpen(false);
    setIsSubClassAdd(false);
    setIsMainClassAdd(false);
    setSubClassId(subClassId);
    setMainClassId(mainClassId);
  };

  const handleClassDelete = async (subClassId: number) => {
    try {
      await deleteSubClass(1, subClassId);
      setClassData((prev) => {
        if (!prev) return prev;

        return prev.map((data) => ({
          ...data,
          subClasses: data.subClasses.filter(
            (classData) => classData.subClassName !== className
          ),
        }));
      });
      navigate(`/manage/attendance/${grade}`);
      fetchClassList();
    } catch (error) {
      alert('반 정보를 삭제하는데 실패했습니다.');
    } finally {
      setIsPopupOpen(false);
    }
  };

  const handleClassEdit = async (
    name: string,
    subClassId: number,
    mainClassId: number
  ) => {
    try {
      const reqData = {
        mainClassId: mainClassId,
        subClassName: name,
      };
      await patchSubClass(reqData, 1, subClassId);
      setClassData((prev) => {
        if (!prev) return prev;

        return prev.map((data) => ({
          ...data,
          subClasses: data.subClasses.filter(
            (classData) => classData.subClassName !== className
          ),
        }));
      });

      fetchClassList();
      navigate(`/manage/attendance/${grade}/${name}`);
    } catch (error) {
      alert('반 정보를 수정하는데 실패했습니다.');
    } finally {
      setIsPopupOpen(false);
      setTempClassName('');
    }
  };
  const handleClickSubPopUp = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPopupOpen(!isPopupOpen);
    setIsSubClassAdd(false);
    setIsMainClassAdd(false);
  };

  const handleSubClassAddBtnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSubClassAdd(!isSubClassAdd);
    setIsPopupOpen(false);
    setIsMainClassAdd(false);
    setIsSubClassShow(true);
    setIsMainClassPopup(!isMainClassPopup);
  };

  const handleSubClassAdd = async (
    mainClassId: number,
    subClassName: string
  ) => {
    try {
      const reqData = {
        mainClassId: mainClassId,
        subClassName: subClassName,
      };
      await postSubClass(reqData, 1);
      fetchClassList();
      navigate(`/manage/attendance/${grade}/${subClassName}`);
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 409) {
        alert('이미 존재하는 서브 클래스입니다.');
      } else {
        alert('서브 클래스를 추가하는데 실패했습니다.');
      }
    }
  };

  const handleMainClassAdd = async (mainClassName: string) => {
    try {
      const reqData = {
        mainClassName: mainClassName,
      };
      await postMainClass(1, reqData);
      fetchClassList();
      navigate(`/manage/attendance/${mainClassName}`);
      setSelectedGrade(mainClassName);
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 409) {
        alert('이미 존재하는 메인 클래스입니다.');
      } else {
        alert('메인 클래스를 추가하는데 실패했습니다.');
      }
    }
  };

  const handleMainClassDelete = async (mainClassId: number) => {
    try {
      await deleteMainClass(mainClassId);
      setClassData((prev) => {
        if (!prev) return prev;

        return prev.filter((data) => data.mainClassId !== mainClassId);
      });
    } catch (error) {
      alert('메인 클래스를 삭제하는데 실패했습니다.');
    } finally {
      setIsMainClassPopup(false);
      setIsSubClassShow(true);
    }
  };
  const handleMainAddBtnClick = () => {
    setIsMainClassAdd(!isMainClassAdd);
    setIsPopupOpen(false);
    setIsSubClassAdd(false);
  };

  const handleMainClassKebabClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMainClassPopup(!isMainClassPopup);
    setIsSubClassShow(true);
  };
  const handleMainClassEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMainClassEdit(true);
    setIsMainClassPopup(false);
    setIsSubClassShow(true);
  };

  const handleMainClassNameEdit = async (
    mainClassName: string,
    mainClassId: number
  ) => {
    try {
      if (mainClassName.length === 0) {
        alert('메인 클래스 이름을 입력해주세요.');
      } else if (mainClassName.length > 10) {
        alert('메인 클래스 이름은 20자 이하로 입력해주세요.');
      } else {
        await patchMainClass(mainClassId, { mainClassName: mainClassName });
        fetchClassList();
      }
    } catch (error) {
      alert('메인 클래스를 수정하는데 실패했습니다.');
    } finally {
      setIsMainClassEdit(false);
    }
  };

  return (
    <>
      <S.AttendanceWrapper>
        <S.AttendanceBtn onClick={() => navigate('/manage/attendance/all')}>
          전체학생
        </S.AttendanceBtn>
        {classData?.map((data, index) => (
          <S.ManageWrapper key={data.mainClassId}>
            <S.GradeWrapper
              onClick={() => handleGradeClick(data.mainClassName)}
            >
              <S.Grade>
                <S.Icon
                  src={
                    grade === data.mainClassName && isSubClassShow
                      ? downArrow
                      : rightArrow
                  }
                  alt='down arrow'
                />
                {isMainClassEdit && data.mainClassName === grade ? (
                  <>
                    <S.GradeInput
                      onChange={(e) => setMainClassEdit(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleMainClassNameEdit(
                            mainClassEdit,
                            data.mainClassId
                          );
                        }
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </>
                ) : (
                  data.mainClassName
                )}
              </S.Grade>
              <S.PlusIcon
                src={kebabIcon}
                alt='plusIcon'
                $isSelected={grade === data.mainClassName}
                onClick={(e) => handleMainClassKebabClick(e)}
              />
              {isMainClassPopup && (
                <MainPopup
                  isOpen={isMainClassPopup && data.mainClassName === grade}
                  onAdd={(e) => handleSubClassAddBtnClick(e)}
                  onEdit={(e) => handleMainClassEdit(e)}
                  onDelete={() => handleMainClassDelete(data.mainClassId)}
                />
              )}
            </S.GradeWrapper>

            <S.ClassWrapper
              $isSelected={data.mainClassName === grade && isSubClassShow}
            >
              {data.subClasses.map((classData) => (
                <S.ClassContainer
                  key={classData.subClassId + classData.mainClassId}
                  onClick={() =>
                    handleClassClick(
                      data.mainClassName,
                      classData.subClassName,
                      classData.mainClassId,
                      classData.subClassId
                    )
                  }
                >
                  <S.Class $isSelected={classData.subClassName === className}>
                    {isEditMode && classData.subClassName === className ? (
                      <S.ClassInput
                        type='text'
                        onChange={(e) => setTempClassName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setIsEditMode(false);
                            handleClassEdit(
                              tempClassName,
                              classData.subClassId,
                              classData.mainClassId
                            );
                          }
                        }}
                      />
                    ) : (
                      classData.subClassName
                    )}
                  </S.Class>
                  <S.KebabIcon
                    src={kebabIcon}
                    alt='kebab icon'
                    $isSelected={classData.subClassName === className}
                    onClick={(e) => handleClickSubPopUp(e)}
                  />
                  {isPopupOpen && (
                    <Popup
                      isOpen={
                        isPopupOpen && classData.subClassName === className
                      }
                      onDelete={() => handleClassDelete(classData.subClassId)}
                      onEdit={() => setIsEditMode(true)}
                    />
                  )}
                </S.ClassContainer>
              ))}
              {isSubClassAdd && (
                <S.ClassContainer>
                  <S.Class>
                    <S.ClassInput
                      type='text'
                      placeholder='하위 클래스 입력'
                      onChange={(e) => setTempNewClassName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setIsSubClassAdd(false);
                          handleSubClassAdd(data.mainClassId, tempNewClassName);
                        }
                      }}
                    />
                  </S.Class>
                </S.ClassContainer>
              )}
            </S.ClassWrapper>
          </S.ManageWrapper>
        ))}
        {isMainClassAdd && (
          <S.GradeWrapper>
            <S.Grade>
              <S.Icon src={rightArrow} alt='right arrow' />
              <S.MainClassInput
                type='text'
                placeholder='메인 클래스 입력'
                onChange={(e) => setTempMainClassName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setIsMainClassAdd(false);
                    handleMainClassAdd(tempMainClassName);
                  }
                }}
              />
            </S.Grade>
          </S.GradeWrapper>
        )}
        <S.AttendanceBtn onClick={() => handleMainAddBtnClick()}>
          <S.BtnIcon src={bluePlusIcon} alt='plus icon' />
        </S.AttendanceBtn>
      </S.AttendanceWrapper>
    </>
  );
}

export default Attendance;
