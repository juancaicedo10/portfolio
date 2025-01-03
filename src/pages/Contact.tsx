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
      <p className='text-2xl font-mono my-5 text-center'>Let's Work together!</p>
      <div className='flex w-[90%] lg:w-3/4 flex-col md:flex-row justify-center my-8'>
        <ul className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-purple-700 text-3xl md:text-4xl font-bold font-rowdies'>Contact Info</h1>
          <a href='https://wa.me/+573107642808?text=mensaje' target='_blank' className='flex text-green-500 hover:text-green-600 text-xl items-center justify-center font-mono py-3 w-full'>
            <WhatsAppIcon fontSize='large' />
            WhatsApp
          </a>
          <a href='#' target='_blank' className='flex text-white hover:text-gray-300 text-xl items-center justify-center font-mono py-3 w-1/2'>
            <EmailIcon fontSize='large' />
            imjuan3772@gmail.com
          </a>
          <a href='https://www.linkedin.com/in/juan-esteban-caicedo-valencia-a07551264/' target='_blank' className='flex text-xl justify-center items-center text-blue-500 hover:text-blue-600 font-mono py-3 w-full'>
            <LinkedInIcon fontSize='large' />
            LinkedIn
          </a>
          <a href='https://github.com/JuanCaicedo10' target='_blank' className='flex text-xl justify-center items-center text-white hover:text-gray-300 font-mono py-3 w-full'>
            <GitHubIcon fontSize='large' />
            GitHub
          </a>
        </ul>
      </div>
    </div>
  )
}

export default LetsWork
