import logo from '../images/logo.png'
import TypeWriter from '../components/typeWritter'


function HomePage() {
  return (
   <div className="bg-black w-full min-h-[100vh] text-white flex flex-col items-center font-mono" id='about'>
  <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-3/4 md:w-[55%] mt-24 lg:w-1/2 xl:w-1/3 2xl:w-[30%]'>
    <img src={logo} alt="juancoding logo" className='w-full h-full object-cover' />
  </div>
  <TypeWriter text={['Juuan Esteban Caicedo Valencia']} speed={60} />
  <h2 className='text-4xl font-bold font-russo text-purple-600 my-2 text-center md:text-6xl'>Full Stack Web Developer</h2>
<p className="sm:text-center text-sm md:text-base xl:w-1/2 font-bold text-gray-300 w-full xl:text-start text-center px-4 md:w-3/4">Soy un apasionado desarrollador FullStack con amplia experiencia en la creación de aplicaciones web modernas y funcionales. Mi enfoque principal es ofrecer soluciones creativas y eficientes para satisfacer las necesidades de mis clientes. Con habilidades en tecnologías como HTML, CSS, JavaScript, React, Node.js y bases de datos SQL y NoSQL, estoy preparado para enfrentar cualquier desafío de desarrollo. ¡Trabajemos juntos para llevar tu proyecto al siguiente nivel!</p>
    </div>
  )
}

export default HomePage
