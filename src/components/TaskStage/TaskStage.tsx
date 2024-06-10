import { TaskCard } from "@components/TaskCard/TaskCard";
import { useGetActiveProject } from "@hooks/useGetActiveProject";
import { useAppSelector } from "@store/hooks";
import { RootState } from "@store/store";
import { readableColor } from "color2k";
import { DotsThreeVertical, PlusCircle } from "phosphor-react";
import { useCallback, useMemo } from "react";

type Props = {
  stageID: string;
};

export const TaskStage = ({ stageID }: Props) => {
  const activeProject = useGetActiveProject();
  const stageInfo = useMemo(
    () => activeProject?.stages.find((stage) => stage.id === stageID),
    [activeProject, stageID],
  );

  const tasksSelectorFn = useCallback(
    (state: RootState) =>
      state.projects.tasks
        .filter((task) => task.stageID === stageID)
        .map((t) => t.id),
    [stageID],
  );

  const stageTaskIDs = useAppSelector(tasksSelectorFn);

  if (!stageInfo) return null;

  return (
    <div
      className="h-full rounded-t-3xl"
      style={{ border: `1px solid ${stageInfo.color}` }}
    >
      <div
        className="h-max w-full p-3 rounded-t-3xl flex justify-between items-center"
        style={{ background: stageInfo.color }}
      >
        <div className="flex items-center space-x-1">
          <h3
            className="text-sm truncate uppercase"
            style={{ color: readableColor(stageInfo.color) }}
          >
            {stageInfo.name}
          </h3>
          <div className="w-4 h-4  truncate rounded-full bg-white text-xs font-medium flex justify-center items-center">
            {stageTaskIDs.length}
          </div>
        </div>

        <div className="flex space-x-1">
          <PlusCircle
            size={20}
            color={readableColor(stageInfo.color)}
            weight="duotone"
            className="cursor-pointer"
          />
          <DotsThreeVertical
            size={20}
            color={readableColor(stageInfo.color)}
            weight="bold"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 overflow-x-hidden overflow-y-auto h-[calc(100vh-220px)] w-max px-2 py-2">
        {stageTaskIDs.map((taskID) => (
          <TaskCard key={taskID} taskID={taskID} />
        ))}
      </div>
    </div>
  );
};
