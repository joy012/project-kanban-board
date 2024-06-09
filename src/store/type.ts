export type SingleStageEntity = {
  id: string;
  name: string;
  color: string;
  expanded: boolean;
};

export type ProjectEntityType = {
  id: string;
  name: string;
  description: string;
  icon?: File;
  stages: SingleStageEntity[];
  tags: SingleTagEntity[];
};

export type SingleTagEntity = {
  id: string;
  name: string;
  color: string;
};

export type SingleTaskEntity = {
  id: string;
  title: string;
  description: string;
  attachments: File[];
  stageID: string;
  projectID: string;
  tags: string[]; // this should be an array of tag ids
  dueDate: {
    start: string;
    end: string;
  };
};

export interface IProjectStore {
  projects: ProjectEntityType[];
  tasks: SingleTaskEntity[];
}
