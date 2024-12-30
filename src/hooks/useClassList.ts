import { getClassInfo } from '@/api/classAPI';
import { ClassData } from '@/types/class.type';
import { useEffect, useState } from 'react';

function useClassList() {
  //mainClass: Object.keys(classList)
  //subClass: classInfo[mainClass]

  const [classList, setClassList] = useState<
    Record<string, { subClassId: number; subClassName: string }[]>
  >({});

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
              subClassId: subClass.subClassId,
              subClassName: subClass.subClassName,
            })
          );
          return acc;
        },
        {}
      );

      setClassList(_data);
    };
    fetchClass();
  }, []);

  return {
    classList,
  };
}

export default useClassList;
