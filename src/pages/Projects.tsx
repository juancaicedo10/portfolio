import { useRef } from 'react'
import ProjectCard from "../components/ProjectCard"
import coffeShop from '../images/coffeshop-project.jpg'
import fastFood from '../images/fastfood-project.jpg'
import supermarket from '../images/supermarket-project.jpg'
import Backend from '../images/backend-project.jpg'
import Amazon from '../images/amazon-project.jpg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Projects() {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = ( direction: 'left' | 'right' ) => {
    const cardWidth = document.getElementById('card')?.clientWidth || 0
    console.log(cardWidth)
    const scrollAmount = cardWidth + 20
    if( direction === 'left' ) {
      scrollContainerRef.current?.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      })
    }
    if( direction === 'right' ) {
      scrollContainerRef.current?.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full min-h-[100vh] bg-black text-white text-center flex flex-col justify-center items-center" id="projects">
      <h1 className="text-center font-bold text-4xl lg:text-7xl mt-16">Projects</h1>
      <div className='flex justify-center items-center w-full'>
        <button onClick={() => handleScroll('left')} className='bg-purple-600 rounded-full p-4 block translate-x-[50%] z-20'>
          <ChevronLeftIcon fontSize='large'/>
        </button>
        <div ref={scrollContainerRef} className="overflow-hidden whitespace-nowrap w-full lg:w-[1200px] flex items-center h-[700px]">
        <ProjectCard title="Coffe Shop Website" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={coffeShop} />
        <ProjectCard title="Fast Food Website" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={fastFood} isMiddleIndex/>
        <ProjectCard title="Panda E-commerce" description="desarrollé junto a un equipo de trabajo una página web completa para un supermercado, utilizando React, TypeScript y Tailwind CSS en el frontend, y Node.js, Express.js y MongoDB en el backend. La aplicación ofrece una experiencia de compra en línea intuitiva y satisfactoria para los usuarios." image={supermarket} />
        <ProjectCard title="Amazon FullStack Clon" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas? asdfasdfasdf asdfasdfasdf asdfasdfasdf asdfasdfasdf " image={Amazon} isMiddleIndex/>
        <ProjectCard title="Backend E-commerce" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={Backend} />
        </div>
        <button onClick={() => handleScroll('right')} className='bg-purple-600 rounded-full p-4 flex translate-x-[-50%] z-20'>
          <ChevronRightIcon fontSize='large'/>
        </button>
      </div>
    </div>
  )
}

export default Projects  

