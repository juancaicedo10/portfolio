import project from '../images/proyecto-1.png'

function ProjectCard() {
  return (
    <div className="w-1/5 m-5 rounded-lg shadow-lg shadow-gray-400 bg-black flex flex-col justify-center items-center text-white">
      <img src={project} alt="" className='p-2 w-full'/>
      <h1 className='border-b-2 border-blue-500 text-5xl font-bold py-1'>Project Name</h1>
        <p className='text-xl text-center py-3 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestia Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi id, cumque debitis omnis dignissimos illo facilis accusamus dicta doloribus fugit? Fuga quidem placeat pariatur harum quas iste sit cum. </p>
        <button className="bg-blue-400 text-white rounded-3xl px-4 py-2 m-4">View Project</button>
    </div>
  )
}

export default ProjectCard
