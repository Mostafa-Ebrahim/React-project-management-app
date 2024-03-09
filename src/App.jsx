import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

export default function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProject((prevState) => {
      const newTask = {
        id: Math.random().toString(36).slice(2),
        projectId: prevState.selectedProjectId,
        text: text,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProject((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((_task) => _task.id !== id),
      };
    });
  }

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
      const newProject = {
        id: Math.random().toString(36).slice(2),
        ...project,
      };
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
        selectedProjectId={project.selectedProjectId}
      />
      {project.selectedProjectId && (
        <Project
          project={selectedProject}
          onDelete={handleDeleteProject}
          tasks={project.tasks.filter(
            ({ projectId }) => projectId === project.selectedProjectId
          )}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
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
