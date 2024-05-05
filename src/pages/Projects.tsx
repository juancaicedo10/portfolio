import { useRef } from 'react'
import ProjectCard from "../components/ProjectCard"
import fastFood from '../images/fastfood-project.jpg'
import supermarket from '../images/supermarket-project.jpg'
import Backend from '../images/backend-project.jpg'
import Amazon from '../images/amazon-project.jpg'
import CycleAPI from '../images/CycleAPI.jpg'
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
        <ProjectCard
        title="Panda E-commerce" 
        description="desarrollé junto a un equipo de trabajo una página web completa para un supermercado, utilizando React, TypeScript y Tailwind CSS en el frontend, y Node.js, Express.js y MongoDB en el backend. La aplicación ofrece una experiencia de compra en línea intuitiva y satisfactoria para los usuarios." 
        image={supermarket} 
        URL='https://ecommerce-frontend-alpha-eight.vercel.app/'
        />

        <ProjectCard 
        title="Prueba Tecnica" 
        description="Realize una prueba tecnica para una empresa de desarrollo de software (donde trabajo actualmente), para el puesto desarollador backend en la cual se me pedia realizar una api de productos utlizando .net core con C# y entity framework y SQL SERVER para la base de datos" 
        image={CycleAPI}
        isMiddleIndex
        URL='https://github.com/juancaicedo10/CycleAPI' 
        />

        <ProjectCard 
        title="Backend E-commerce" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" 
        image={Backend}
        URL='https://ecommerce-backend-eta-two.vercel.app/api/products'
        />

        <ProjectCard 
        title="Acortador URLs" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas? asdfasdfasdf asdfasdfasdf asdfasdfasdf asdfasdfasdf " 
        image={Amazon} 
        isMiddleIndex
        URL='https://clone-7b7b7.web.app/'
        />

        <ProjectCard 
        title="Fast Food Landing Page" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" 
        image={fastFood}
        URL='https://ecommerce-backend-eta-two.vercel.app/api/products'
        />

        </div>
        <button onClick={() => handleScroll('right')} className='bg-purple-600 rounded-full p-4 flex translate-x-[-50%] z-20'>
          <ChevronRightIcon fontSize='large'/>
        </button>
      </div>
    </div>
  )
}

export default Projects

