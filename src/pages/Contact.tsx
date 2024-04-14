import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';

function LetsWork() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [lastName, setLastName] = useState('');


  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      name,
      lastName,
      email,
      phone,
      message
    }

    console.log(data);
  }


  return (
    <div className='w-full min-h-[1024px] flex flex-col items-center justify-center bg-black text-white' id="contact">
      <h1 className='text-4xl md:text-6xl font-bold text-center mt-28'>Contact Me</h1>
      <p className='text-2xl font-mono my-5 text-center'>Vamos a trabajar juntos!</p>
      <div className='flex w-[90%] lg:w-3/4 flex-col md:flex-row justify-center my-8'>
        <ul className='w-full md:w-1/2'>
          <h1 className='text-purple-700 text-3xl md:text-4xl font-bold font-rowdies'>Informacion de Contacto</h1>
          <a href='https://wa.me/+573107642808?text=mensaje' target='_blank' className='flex text-green-500 hover:text-green-600 text-xl items-center justify-start font-mono py-3 w-1/2'>
            <WhatsAppIcon fontSize='large' />
            WhatsApp
          </a>
          <a href='#' target='_blank' className='flex text-white hover:text-gray-300 text-xl items-center justify-start font-mono py-3 w-1/2'>
            <EmailIcon fontSize='large' />
            imjuan3772@gmail.com
          </a>
          <a href='https://www.linkedin.com/in/juan-esteban-caicedo-valencia-a07551264/' target='_blank' className='flex text-xl justify-start items-center text-blue-500 hover:text-blue-600 font-mono py-3 w-1/2'>
            <LinkedInIcon fontSize='large' />
            LinkedIn
          </a>
          <a href='https://github.com/Jayz1x' target='_blank' className='flex text-xl justify-start items-center text-white hover:text-gray-300 font-mono py-3 w-1/2'>
            <GitHubIcon fontSize='large' />
            GitHub
          </a>
        </ul>
        <form action="" className='grid grid-cols-2 gap-2 w-full lg:w-1/2' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" value={name} placeholder='Nombre' className='border p-3 rounded-md bg-transparent' onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z ]/g, ''))} required/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="surname">Apellido</label>
            <input type="text" name="surname" id="surname" value={lastName} placeholder='Apellido' className='border p-3 rounded-md bg-transparent' onChange={(e) => setLastName(e.target.value.replace(/[^a-zA-Z ]/g, ''))} required/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" value={email} placeholder='E-mail' className='border p-3 rounded-md bg-transparent' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="phone">Telefono (optional)</label>
            <input type="text" name="phone" id="phone" value={phone} placeholder='Telefono(opcional)' className='border p-3 rounded-md bg-transparent' onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}/>
          </div>
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" rows={8} value={message} placeholder='tu mensaje' className='p-1 rounded-md border bg-transparent col-span-2' onChange={(e) => setMessage(e.target.value.replace(/[^a-zA-Z ]/g, ''))} required></textarea>
          <button className='bg-gradient-to-r from-purple-600 to-blue-700 rounded-lg font-bold py-4 my-4 text-2xl' type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default LetsWork
