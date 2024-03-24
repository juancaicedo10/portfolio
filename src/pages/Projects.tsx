import { useRef } from 'react'
import ProjectCard from "../components/ProjectCard"
import coffeShop from '../images/coffeshop-project.jpg'
import fastFood from '../images/fastfood-project.jpg'
import supermarket from '../images/supermarket-project.jpg'

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
      <h1 className="text-center text-5xl font-bold py-2 mt-[10vh]">Projects</h1>
      <button onClick={() => handleScroll('left')}>Prev</button>
      <div ref={scrollContainerRef} className="overflow-hidden whitespace-nowrap flex w-[80%] ">
        <ProjectCard title="Coffe Shop Website" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={coffeShop} />
        <ProjectCard title="Fast Food Website" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={fastFood}/>
        <ProjectCard title="SuperMarket E-commerce" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={supermarket} />
        <ProjectCard title="SuperMarket E-commerce" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={supermarket} />
        <ProjectCard title="SuperMarket E-commerce" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis non molestiae neque expedita, voluptatem nobis repellat quasi iure molestias est asperiores. Ab similique sunt ex, sed laboriosam illum voluptas?" image={supermarket} />
      </div>
      <button onClick={() => handleScroll('right')}>Next</button>
    </div>
  )
}

export default Projects  

