import { Header } from "@components/Header/Header";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { FC, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-screen flex items-center">
      <Sidebar />
      <div className="h-screen w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};
