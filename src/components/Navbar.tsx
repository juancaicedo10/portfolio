import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navbar() {
  return (
    <div className="w-full bg-black flex items-center justify-around text-white text-2xl h-[10vh] fixed top-0 ">
      <h1 className="text-4xl font-extrabold">PortFolio</h1>
      <ul className="flex w-1/2 justify-around font-semibold">
        <li className="">Projects</li>
        <li>Technologies</li>
        <li>About me</li>
      </ul>
      <ul className="flex justify-around text-xl">
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
