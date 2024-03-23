import logo from '../images/logo.png'

function HomePage() {
  return (
   <div className="bg-black w-full min-h-[90vh] mt-[10vh] text-white flex flex-col justify-center items-center">
  <div className='bg-red-200 rounded-full'>
    <img src={logo} alt="juancoding logo" className='w-full h-full object-cover' />
  </div>
  <h1 className="text-4xl font-bold my-5">Juan Esteban Caicedo Valencia FullStack Web Developer</h1>
<p className="text-lg font-base text-gray-300 w-1/2">Soy un apasionado desarrollador FullStack con amplia experiencia en la creación de aplicaciones web modernas y funcionales. Mi enfoque principal es ofrecer soluciones creativas y eficientes para satisfacer las necesidades de mis clientes. Con habilidades en tecnologías como HTML, CSS, JavaScript, React, Node.js y bases de datos SQL y NoSQL, estoy preparado para enfrentar cualquier desafío de desarrollo. ¡Trabajemos juntos para llevar tu proyecto al siguiente nivel!</p>

        <button className="font-semibold my-2 px-8 py-2 rounded-3xl bg-gradient-to-r from-purple-400 to-blue-500 border-2¿ border-white">Lets Begin</button>
    </div>
  )
}

export default HomePage
