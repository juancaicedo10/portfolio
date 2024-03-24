import { useRef } from 'react'
import ProjectCard from "../components/ProjectCard"
import coffeShop from '../images/coffeshop-project.jpg'
import fastFood from '../images/fastfood-project.jpg'
import supermarket from '../images/supermarket-project.jpg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Projects() {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = ( direction: 'left' | 'right' ) => {
    if( direction === 'left' ) {
      scrollContainerRef.current?.scrollBy({
        left: -490,
        behavior: 'smooth'
      })
    }
    if( direction === 'right' ) {
      scrollContainerRef.current?.scrollBy({
        left: 490,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full min-h-[100vh] bg-black text-white text-center flex flex-col justify-center items-center" id="projects">
      <h1 className="text-center font-bold text-6xl py-2 mt-[10vh]">Projects</h1>
    <div className='flex justify-center items-center w-full'>
      <button onClick={() => handleScroll('left')} className='bg-purple-600 rounded-full p-4'>
        <ChevronLeftIcon fontSize='large'/>
      </button>
      <div ref={scrollContainerRef} className="overflow-hidden whitespace-nowrap flex w-[75%] ">
        <ProjectCard title="Coffe Shop Website" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={coffeShop} />
        <ProjectCard title="Fast Food Website" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={fastFood}/>
        <ProjectCard title="SuperMarket E-commerce" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={supermarket} />
        <ProjectCard title="SuperMarket E-commerce" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={supermarket} />
        <ProjectCard title="SuperMarket E-commerce" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={supermarket} />
      </div>
      <button onClick={() => handleScroll('right')} className='bg-purple-600 rounded-full p-4'>
        <ChevronRightIcon fontSize='large'/>
      </button>
    </div>
    </div>
  )
}

export default Projects  

