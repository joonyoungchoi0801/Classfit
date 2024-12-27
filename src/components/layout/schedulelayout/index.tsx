import Layout from "..";
import type { ScheduleLayoutProps } from "./ScheduleLayout.types";
import ScheduleSidebar from "@/components/schedulesidebar";
import * as S from "./ScheduleLayout.styles";

function ScheduleLayout({ children }: ScheduleLayoutProps) {
  return (
    <Layout>
      <S.LayoutContainer>
        <ScheduleSidebar />
        {children}
      </S.LayoutContainer>
    </Layout>
  );
}

export default ScheduleLayout;