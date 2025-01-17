import { getClassInfo } from '@/api/classAPI';
import { ClassData } from '@/types/class.type';
import { useEffect, useState } from 'react';

type mainClassDict = {
  mainClassId: number;
  mainClassName: string;
};

function useClassList() {
  //mainClass: Object.keys(classList)
  //subClass: classInfo[mainClass]

  const [classList, setClassList] = useState<
    Record<string, { subClassId: number; subClassName: string }[]>
  >({});

  const [mainClassList, setMainClassList] = useState<mainClassDict[]>([]);
  const [totalMainClassList, setTotalMainClassList] = useState<mainClassDict[]>(
    []
  );

  useEffect(() => {
    const fetchClass = async () => {
      const data = await getClassInfo();
      const _data = data.data.data.reduce(
        (
          acc: Record<string, { subClassId: number; subClassName: string }[]>,
          classItem: ClassData
        ) => {
          acc[classItem.mainClassName] = classItem.subClasses.map(
            (subClass) => ({
              mainClassId: subClass.mainClassId,
              subClassId: subClass.subClassId,
              subClassName: subClass.subClassName,
            })
          );
          return acc;
        },
        {}
      );

      const _mdata = data.data.data.map((item: mainClassDict) => ({
        mainClassId: item.mainClassId,
        mainClassName: item.mainClassName,
      }));

      setClassList(_data);
      setMainClassList(_mdata);
      const _mtdata = [
        { mainClassId: -1, mainClassName: '전체' }, // 추가할 데이터
        ..._mdata,
      ];
      setTotalMainClassList(_mtdata);
    };
    fetchClass();
  }, []);

  return {
    classList,
    mainClassList,
    totalMainClassList,
  };
}

export default useClassList;
