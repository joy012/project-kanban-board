import { Tag } from "@components/Tag/Tag";
import { useAppSelector } from "@store/hooks";
import { RootState } from "@store/store";
import { formatDate } from "@utils/utils";
import { Calendar, DotsThreeVertical, Paperclip } from "phosphor-react";
import { useCallback, useMemo } from "react";

type Props = {
  taskID: string;
};

export const TaskCard = ({ taskID }: Props) => {
  const selectorFn = useCallback(
    (state: RootState) =>
      state.projects.tasks.find((task) => task.id === taskID),
    [taskID],
  );
  const task = useAppSelector(selectorFn);

  const attachmentCover = useMemo(
    () => task?.attachments.find((item) => item.mimeType.includes("image")),
    [task?.attachments],
  );
  console.log({ attachmentCover });
  if (!task) return null;

  return (
    <div className="w-64 h-max rounded-2xl bg-white shadow-sm p-4 border border-primary shrink-0 group cursor-grab">
      <div className="flex justify-between items-start">
        <div className="flex flex-wrap justify-start items-center mb-2 basis-11/12">
          {task.tags.map((tag) => (
            <Tag key={tag} tagID={tag} />
          ))}
        </div>

        <DotsThreeVertical
          size={20}
          weight="bold"
          className="invisible group-hover:visible cursor-pointer"
        />
      </div>
      <h2 className="text-sm font-medium text-darkGray pb-4">{task.title}</h2>

      {attachmentCover && (
        <img src={attachmentCover?.url} className="w-full pb-4 rounded-xl" />
      )}

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <Calendar size={16} className="text-mediumGray" weight="duotone" />
          <p className="text-sm text-mediumGray">{formatDate(task.dueDate)}</p>
        </div>

        {task.attachments.length > 0 && (
          <div className="flex items-center space-x-1">
            <Paperclip size={16} className="text-mediumGray" weight="duotone" />
            {task.attachments.length > 0 && (
              <p className="text-sm text-mediumGray">
                {task.attachments.length}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
