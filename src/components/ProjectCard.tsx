
type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  isMiddleIndex?: boolean;
}

    function ProjectCard({ title, description, image, isMiddleIndex }: ProjectCardProps) {
      return (
        <div className={`min-w-[100%] ${isMiddleIndex ? 'mx-[16px]' : 'm-0'} md:min-w-[calc((100%/2)-16px)] lg:min-w-[calc((100%/3)-10px)] h-[600px] rounded-lg shadow-lg border-2 border-gray bg-black flex flex-col justify-center items-center text-white transition-all duration-200 transform md:hover:scale-105 z-10`} id="card">
          <img src={image} alt="project image" className='p-2 w-full h-[250px]'/>
          <h1 className='border-b-2 border-blue-500 text-xl md:text-3xl font-light font-rowdies'>{title}</h1>
          <div className="max-w-[450px] overflow-hidden whitespace-normal">
            <p className="text-sm sm:text-sm sm:p-0 sm:m-0 md:text-base lg:my-2 lg:mx-2 text-center font-mono">{description}</p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg sm:text-xl md:text-2xl font-russo rounded-3xl px-6 py-4 m-4">View Project</button>
        </div>
      )
    }

export default ProjectCard
