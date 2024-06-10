import { HeaderSkeleton } from "@components/Skeleton/HeaderSkeleton";
import { useGetActiveProject } from "@hooks/useGetActiveProject";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setActiveView } from "@store/reducers/projectReducers";
import { ActiveView } from "@store/type";
import {
  ChartBar,
  DotsThreeOutlineVertical,
  Kanban,
  Rows,
} from "phosphor-react";

const projectViews = [
  {
    view: "project",
    icon: <ChartBar size={20} weight="duotone" className="mr-1" />,
  },
  {
    view: "kanban",
    icon: <Kanban size={20} weight="duotone" className="mr-1" />,
  },
  {
    view: "list",
    icon: <Rows size={20} weight="duotone" className="mr-1" />,
  },
];

export const Header = () => {
  const dispatch = useAppDispatch();
  const activeView = useAppSelector((state) => state.projects.activeView);
  const activeProject = useGetActiveProject();

  if (!activeProject) {
    return <HeaderSkeleton />;
  }

  const handleActiveView = (selectedView: string) => {
    dispatch(setActiveView({ view: selectedView as ActiveView }));
  };

  return (
    <div className="h-36 w-full px-7 pt-5 border-b border-primary shadow-sm relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full shadow-xl bg-lightBlue flex justify-center items-center">
            {activeProject.icon ? (
              <img src={activeProject.icon} className="w-5 h-5" />
            ) : (
              <ChartBar size={24} weight="duotone" />
            )}
          </div>
          <h2 className="text-2xl text-black font-semibold">
            {activeProject.name}
          </h2>
        </div>

        <DotsThreeOutlineVertical size={20} weight="duotone" />
      </div>

      <div className="flex justify-start items-end space-x-5 min-w-max absolute bottom-[-2px]">
        {projectViews.map((item, index) => (
          <div
            key={index}
            onClick={() => handleActiveView(item.view)}
            className={`cursor-pointer capitalize h-12 min-w-max px-3 flex items-center justify-center text-sm transition duration-500 ease-in-out ${activeView === item.view ? "text-primaryBlue border-b-2 border-primaryBlue font-semibold" : "text-darkGray font-medium border-0"}`}
          >
            {item.icon}
            {item.view}
          </div>
        ))}
      </div>
    </div>
  );
};
