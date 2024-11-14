import { ClassData } from '@/components/managesidebar/Attendance.type';
import { useQuery } from '@tanstack/react-query';

function useGetClassInfo(queryKey: string, queryFn: () => Promise<ClassData>) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn();
      return res.data;
    },
  });
}

export default useGetClassInfo;
