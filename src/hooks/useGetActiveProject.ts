import { useAppSelector } from '@store/hooks';
import { useMemo } from 'react';

export const useGetActiveProject = () => {
  const projects = useAppSelector((state) => state.projects.projects);
  const activeProjectID = useAppSelector(
    (state) => state.projects.activeProjectID
  );

  const activePorject = useMemo(() => {
    return projects.find((project) => project.id === activeProjectID);
  }, [activeProjectID, projects]);

  return activePorject;
};
