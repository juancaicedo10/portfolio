import  { useState, useEffect } from 'react';

type TypeWriterProps = {
    text: Array<string>;
    speed: number
}

const useTypewriter = ({text, speed}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const joinedText = text.join(' ');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < joinedText.length) {
        setDisplayText(prevText => prevText + joinedText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [joinedText, speed]);

  return displayText;
};


const Typewriter = ({ text, speed }: TypeWriterProps) => {
    const displayText = useTypewriter({text, speed});
  
    return <h1 className="text-2xl font-bold text-center w-[90%] md:text-3xl my-4">{displayText}</h1>;
};

export default Typewriter;