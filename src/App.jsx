import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

export default function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleNewProject() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSaveProject(project) {
    setProject((prevState) => {
      const newProject = { id: prevState.projects.length + 1, ...project };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelProject() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (_project) => _project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = project.projects.find(
    (_project) => _project.id === project.selectedProjectId
  );

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar
        projects={project.projects}
        newProject={handleNewProject}
        onSelect={handleSelectProject}
      />
      {project.selectedProjectId && (
        <Project project={selectedProject} onDelete={handleDeleteProject} />
      )}
      {project.selectedProjectId === null && (
        <NewProject onSave={handleSaveProject} onCanel={handleCancelProject} />
      )}
      {project.selectedProjectId === undefined && (
        <NoProjectSelected newProject={handleNewProject} />
      )}
    </div>
  );
}
