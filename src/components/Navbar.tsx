import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../images/logo.png';

function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    console.log(element)
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="w-full bg-black flex items-center justify-center text-white text-2xl h-[10vh] fixed top-0 ">
      <ul className='h-full flex items-center  absolute left-0'>
      <img src={Logo} alt="" className='w-full h-full object-contain' />
      <h1 className="text-4xl font-extrabold font-mono">JuanCoding</h1>
      </ul>
      <ul className="flex w-1/2 justify-around font-normal font-sans text-4xl select-none cursor-pointer">
      <button className="focus:outline-none border-b-4 border-transparent focus:border-blue-500" onClick={() => scrollTo('projects')}>Projects</button>
      <button className="focus:outline-none border-b-4 border-transparent focus:border-blue-500" onClick={() => scrollTo('technologies')}>Technologies</button>
      <button className="focus:outline-none border-b-4 border-transparent focus:border-blue-500" onClick={() => scrollTo('about')}>About Me</button>
      </ul>
      <ul className="flex justify-around text-xl bg-red-200 w-[210px] absolute right-0">
        <li>Facebook</li>
        <li>
            <LinkedInIcon />
        </li>
        <li>
            <GitHubIcon />
        </li>
      </ul>
    </div>
  )
}

export default Navbar
