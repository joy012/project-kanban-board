export type SingleStageEntity = {
  id: string;
  name: string;
  color: string;
  expanded: boolean;
};

export type ProjectStatus = "active" | "closed";

export type ProjectEntityType = {
  id: string;
  name: string;
  description: string;
  icon?: string;
  stages: SingleStageEntity[];
  tags: SingleTagEntity[];
  status: ProjectStatus;
};

export type SingleTagEntity = {
  id: string;
  name: string;
  color: string;
};

export type SingleAttachmentEntity = {
  id: string;
  name: string;
  url: string;
  mimeType: string;
  createdAt?: string;
};

export type DateEnity = {
  start: string;
  end: string;
};

export type SingleTaskEntity = {
  id: string;
  title: string;
  description: string;
  attachments: SingleAttachmentEntity[];
  stageID: string;
  projectID: string;
  tags: string[]; // this should be an array of tag ids
  dueDate: DateEnity;
};

export type ActiveView = "project" | "kanban" | "list";

export interface IProjectStore {
  projects: ProjectEntityType[];
  tasks: SingleTaskEntity[];
  activeView: ActiveView;
  activeProjectID: string;
}
