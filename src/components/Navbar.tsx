import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false)
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    console.log(element)
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="w-full flex items-center justify-center text-white text-2xl min-h-[10vh] fixed top-0 z-50 bg-black">
      <ul className='h-full flex items-center absolute left-0 '>
      <img src={Logo} alt="" className='w-full h-[70px] object-contain select-none cursor-pointer' onClick={() => scrollTo('about')} />
      <h1 className="text-2xl font-extrabold font-mono select-none cursor-pointer" onClick={() => scrollTo('about')}>JuanCoding</h1>
      </ul>

      <div>
      <button className="focus:outline-none lg:hidden flex absolute right-0 top-0 p-2 m-5 " onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon fontSize='large'/> : <MenuIcon fontSize='large'/>}
      </button>
      </div>
      <ul className="hidden w-1/2 justify-around font-normal font-sans text-4xl select-none cursor-pointer lg:flex">
      <button className="focus:outline-none border-b-4 border-transparent focus:border-blue-500" onClick={() => scrollTo('projects')}>Projects</button>
      <button className="focus:outline-none border-b-4 border-transparent focus:border-blue-500" onClick={() => scrollTo('technologies')}>Technologies</button>
      <button className="focus:outline-none border-b-4 border-transparent focus:border-blue-500" onClick={() => scrollTo('about')}>About Me</button>
      </ul>
      {isOpen && (
      <ul className="flex w-full justify-around items-start font-normal flex-col font-sans text-xl select-none cursor-pointer translate-y-[14vh] absolute left-0 bg-black py-5">
      <button className="focus:outline-none border-b-4 border-transparent focus:border-blue-500" onClick={() => scrollTo('projects')}>Projects</button>
      <button className="focus:outline-none border-b-4 border-transparent focus:border-blue-500" onClick={() => scrollTo('technologies')}>Technologies</button>
      <button className="focus:outline-none border-b-4 border-transparent focus:border-blue-500" onClick={() => scrollTo('about')}>About Me</button>
      <li>
        <a href="http://" className='mx-2'>
          <GitHubIcon />
        </a>
        <a href="http://" className='mx-2'>
          <LinkedInIcon />  
        </a> 
      </li>
      </ul>
      )}
    </div>
  )
}

export default Navbar
