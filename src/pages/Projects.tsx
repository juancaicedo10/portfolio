import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <div className="w-full bg-black text-white text-center flex flex-col justify-center items-center">
      <h1 className="text-center text-5xl font-bold py-2">Projects</h1>
      <div className="flex flex-wrap justify-center items-center w-full">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects

