import { initalProjects } from '@data/initalProjectData';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'projects',
  initialState: initalProjects,
  reducers: {
    deleteProject: (
      state,
      { payload }: PayloadAction<{ projectID: string }>
    ) => {
      const projectIndex = state.projects.findIndex(
        (project) => project.id === payload.projectID
      );

      state.projects.splice(projectIndex, 1);
    },
  },
});

export const { deleteProject } = projectSlice.actions;

const projectReducers = projectSlice.reducer;
export default projectReducers;
