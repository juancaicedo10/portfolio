import logo from '../images/logo.png'
import TypeWriter from '../components/typeWritter'


function HomePage() {
  return (
   <div className="bg-black w-full h-[100vh] text-white flex flex-col justify-center items-center font-mono" id='about'>
  <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-full h-[1/2] mt-[13vh]'>
    <img src={logo} alt="juancoding logo" className='w-full h-full object-cover' />
  </div>
  <TypeWriter text={['Juuan Esteban Caicedo Valencia']} speed={60} />
  <h2 className='text-6xl font-extrabold font-russo text-purple-600 my-2'>Full Stack Web Developer</h2>
<p className="text-lg font-bold text-gray-300 w-1/2">Soy un apasionado desarrollador FullStack con amplia experiencia en la creación de aplicaciones web modernas y funcionales. Mi enfoque principal es ofrecer soluciones creativas y eficientes para satisfacer las necesidades de mis clientes. Con habilidades en tecnologías como HTML, CSS, JavaScript, React, Node.js y bases de datos SQL y NoSQL, estoy preparado para enfrentar cualquier desafío de desarrollo. ¡Trabajemos juntos para llevar tu proyecto al siguiente nivel!</p>
    </div>
  )
}

export default HomePage
