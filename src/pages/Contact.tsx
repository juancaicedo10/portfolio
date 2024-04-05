import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function LetsWork() {
  return (
    <div className='w-full min-h-[1024px] max-h-[1024px] flex flex-col items-center justify-center bg-black text-white' id="contact">
      <h1 className='text-4xl md:text-6xl font-bold text-center mt-28'>Contact Me</h1>
      <p className='text-2xl font-mono my-5 text-center'>Vamos a trabajar juntos!</p>
    <div className='flex w-[90%] lg:w-3/4 flex-col md:flex-row justify-center my-8'>
      <ul className='w-full md:w-1/2'>
        <h1 className='text-purple-700 text-3xl md:text-4xl font-bold font-rowdies'>Informacion de Contacto</h1>
        <a href='https://wa.me/+573107642808?text=mensaje' target='_blank' className='flex text-green-500 text-xl items-center justify-start font-mono py-3'>
          <WhatsAppIcon fontSize='large'/>
          WhatsApp
        </a>
        <a href='#' target='_blank' className='flex text-white text-xl items-center justify-start font-mono py-3'>
          <EmailIcon fontSize='large'/>
          imjuan3772@gmail.com
        </a>
        <a href='https://www.linkedin.com/in/juan-esteban-caicedo-valencia-a07551264/' target='_blank' className='flex text-xl justify-start items-center text-blue-500 font-mono py-3'>
          <LinkedInIcon fontSize='large'/>
          LinkedIn
        </a>
        <a href='https://github.com/Jayz1x' target='_blank' className='flex text-xl justify-start items-center text-white font-mono py-3'>
          <GitHubIcon fontSize='large'/>
          GitHub
        </a>
      </ul>
      <form action="" className='grid grid-cols-2 gap-2 w-full lg:w-1/2'>
  <div className='flex flex-col'>
    <label htmlFor="name">Nombre</label>
    <input type="text" name="name" id="name" placeholder='Nombre' className='border p-3 rounded-md bg-transparent'/>
  </div>
  <div className='flex flex-col'>
    <label htmlFor="surname">Apellido</label>
    <input type="text" name="surname" id="surname" placeholder='Apellido' className='border p-3 rounded-md bg-transparent'/>
  </div>
  <div className='flex flex-col'>
    <label htmlFor="email">E-mail</label>
    <input type="text" name="email" id="email" placeholder='E-mail' className='border p-3 rounded-md bg-transparent'/>
  </div>
  <div className='flex flex-col'>
    <label htmlFor="phone">Telefono (optional)</label>
    <input type="text" name="phone" id="phone" placeholder='Telefono(opcional)' className='border p-3 rounded-md bg-transparent'/>
  </div>
    <label htmlFor="message">Mensaje</label>
    <textarea name="message" id="message" rows={8} placeholder='tu mensaje' className='p-1 rounded-md border bg-transparent col-span-2'></textarea>
  <button className='bg-gradient-to-r from-purple-600 to-blue-700 rounded-lg font-bold py-4 my-4 text-2xl'>Enviar</button>
</form>
    </div>
    </div>
  )
}

export default LetsWork
