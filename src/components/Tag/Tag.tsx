import { useGetActiveProject } from "@hooks/useGetActiveProject";
import { lighten, readableColor } from "color2k";
import { useMemo } from "react";

type Props = {
  tagID: string;
};

export const Tag = ({ tagID }: Props) => {
  const activeProject = useGetActiveProject();
  const selectedTag = useMemo(
    () => activeProject?.tags.find((tag) => tag.id === tagID),
    [activeProject, tagID],
  );

  if (!selectedTag) return null;

  return (
    <div
      className="h-6 rounded-full px-2 py-1 border border-primary font-normal text-xs shadow-sm shrink-0 mr-1 mb-1"
      style={{
        backgroundColor: lighten(selectedTag.color, 0.1),
        color: readableColor(selectedTag.color),
      }}
    >
      {selectedTag.name}
    </div>
  );
};
