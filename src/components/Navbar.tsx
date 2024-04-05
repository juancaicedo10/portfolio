import Logo from '../images/logo.png';
import { useState } from 'react';

function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false)
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    console.log(element)
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18"/>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono text-white">JuanCoding</h1>
      </div>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"  onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Open main menu</span>
      </button>
      <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <h1 onClick={() => scrollTo('about')} className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white cursor-pointer select-none text-3xl">Home</h1>
          <li>
          <h1 onClick={() => scrollTo('projects')} className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white cursor-pointer select-none text-3xl">Projects</h1>
          </li>
          <li>
          <h1 onClick={() => scrollTo('technologies')} className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white cursor-pointer select-none text-3xl">Technologies</h1>
          </li>
          <li>
          <h1 onClick={() => scrollTo('contact')} className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white cursor-pointer select-none text-3xl">Contact</h1>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
