
type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
}

function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="min-w-[450px] m-5 rounded-lg shadow-lg border-2 border-gray bg-black flex flex-col justify-center items-center text-white transition-all duration-200 transform hover:scale-105 z-10 whitespace-nowrap">
      <img src={image} alt="" className='p-2 w-full h-[250px]'/>
      <h1 className='border-b-2 border-blue-500 text-4xl font-light font-rowdies py-1'>{title}</h1>
      <div className="max-w-[450px] overflow-hidden whitespace-normal">
  <p className="text-lg text-center py-3 px-4 font-mono">{description}</p>
</div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-russo rounded-3xl px-6 py-4 m-4">View Project</button>
    </div>
  )
}

export default ProjectCard
