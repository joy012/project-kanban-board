import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setActiveProject } from "@store/reducers/projectReducers";
import { ProjectStatus } from "@store/type";
import { createAttachmentImgSrc } from "@utils/utils";
import { CaretRight, Kanban, MagnifyingGlass } from "phosphor-react";
import { useEffect, useMemo, useState } from "react";




export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const [currentTab, setCurrentTab] = useState<ProjectStatus>('active');
  const [search, setSearch] = useState<string>('');

  const projects = useAppSelector((state) => state.projects.projects);
  const activeProjectID = useAppSelector((state) => state.projects.activeProjectID);

  const activeProjects = useMemo(() => projects.filter((project) => project.status === 'active'), [projects]);
  const closedProjects = useMemo(() => projects.filter((project) => project.status === 'closed'), [projects]);

  useEffect(() => {
    if (!activeProjectID) {
      dispatch(setActiveProject({ projectID: activeProjects[0].id }));
    }
  }, [activeProjectID, activeProjects, dispatch]);

  const sidebarTabs = useMemo(() => {
    return [{
      name: 'Active',
      status: 'active',
      count: activeProjects.length
    }, {
      name: 'Closed',
      status: 'closed',
      count: closedProjects.length
    }]
  }, [activeProjects.length, closedProjects.length]);

  const currentTabProjects = useMemo(() => {
    if (currentTab === 'active') {
      return activeProjects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase()));
    }

    return closedProjects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase()));
  }, [activeProjects, closedProjects, currentTab, search]);

  const handleTab = (tab: string) => {
    if (tab === 'active') {
      setCurrentTab('active')
      return;
    }

    setCurrentTab('closed');
    return;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleActiveProject = (projectID: string) => {
    dispatch(setActiveProject({ projectID }));
  }

  return (
    <div className="h-full w-[320px] shrink-0 basis-[320px] px-5 py-8 border-r border-primary shadow-xl shadow-slate-300">
      <h1 className="text-4xl font-bold mb-10">Task Hub</h1>
      <h1 className="text-xl font-semibold text-black">All Projects</h1>

      <div className="flex items-center space-x-2 border rounded-full bg-lightPink h-11 px-3 mb-6 mt-4">
        <MagnifyingGlass size={20} />
        <input type="text" value={search} onChange={handleSearch} placeholder="Search Project" className="bg-transparent border-none focus:outline-none text-sm text-darkGray font-normal" />
      </div>

      <div className="flex items-center space-x-3 mb-8">
        {
          sidebarTabs.map((tab, index) =>
            <div key={index} onClick={() => handleTab(tab.status)} className={`min-w-24 h-8 ${currentTab === tab.status ? 'bg-black text-white' : 'bg-lightPink text-darkGray'} border border-primary rounded-full  text-sm flex justify-center items-center cursor-pointer`}>{tab.name} ({tab.count})</div>
          )
        }
      </div>

      <div className="flex flex-col space-y-3">

        {
          currentTabProjects.length ?
            currentTabProjects.map((project) =>
              <div key={project.name} onClick={() => handleActiveProject(project.id)} className={`flex justify-start items-center space-x-3 h-12 w-full py-4 px-3 rounded-full shadow-sm ${activeProjectID === project.id ? 'bg-pink/[0.24]' : ''}`}>
                <div className="w-8 h-8 rounded-full shadow-xl bg-lightBlue flex justify-center items-center">
                  {
                    project.icon ?
                      <img src={createAttachmentImgSrc(project.icon)} className="w-5 h-5" />
                      :
                      <Kanban size={20} weight="duotone" />
                  }

                </div>
                <h3 className="text-sm font-medium text-black truncate">{project.name}</h3>
                <CaretRight size={18} weight="bold" />
              </div>

            )
            :
            <h3 className="text-base text-darkGray text-center">No project found!</h3>
        }
      </div>
    </div>
  )
}