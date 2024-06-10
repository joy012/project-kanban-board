import { HeaderSkeleton } from "@components/Skeleton/HeaderSkeleton";
import { useGetActiveProject } from "@hooks/useGetActiveProject";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setActiveView } from "@store/reducers/projectReducers";
import { ActiveView } from "@store/type";
import { createAttachmentImgSrc } from "@utils/utils";
import { DotsThreeOutlineVertical, Kanban } from "phosphor-react";

const projectViews: ActiveView[] = ["project", "kanban", "list"];

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
    <div className="h-36 w-full px-7 pt-7 border-b border-primary shadow-md relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full shadow-xl bg-lightBlue flex justify-center items-center">
            {activeProject.icon ? (
              <img
                src={createAttachmentImgSrc(activeProject.icon)}
                className="w-5 h-5"
              />
            ) : (
              <Kanban size={24} weight="duotone" />
            )}
          </div>
          <h2 className="text-2xl text-black font-semibold">
            {activeProject.name}
          </h2>
        </div>

        <DotsThreeOutlineVertical size={20} weight="duotone" />
      </div>

      <div className="flex justify-start items-end space-x-5 min-w-max absolute bottom-[-2px]">
        {projectViews.map((view, index) => (
          <div
            key={index}
            onClick={() => handleActiveView(view)}
            className={`cursor-pointer capitalize h-12 w-16 border-b-2  flex items-center justify-center text-sm ${activeView === view ? "text-primaryBlue border-primaryBlue font-semibold" : "text-darkGray font-medium border-0"}`}
          >
            {view}
          </div>
        ))}
      </div>
    </div>
  );
};
