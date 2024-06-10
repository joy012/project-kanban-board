import { MainLayout } from "@Layouts/MainLayout";
import { TaskStage } from "@components/TaskStage/TaskStage";
import { useGetActiveProject } from "@hooks/useGetActiveProject";
import { useMemo } from "react";

export const Dashboard = () => {
  const activeProject = useGetActiveProject();

  const projectStages = useMemo(() => activeProject?.stages, [activeProject]);

  return (
    <MainLayout>
      <div className="w-full h-[calc(100vh-100px)] p-7 bg-lightGray flex space-x-6 overflow-hidden">
        {projectStages?.map((stage) => (
          <TaskStage key={stage.id} stageID={stage.id} />
        ))}
      </div>
    </MainLayout>
  );
};
