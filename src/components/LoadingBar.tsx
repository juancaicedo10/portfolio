import { useEffect, useState } from 'react';


type LoadingBarProps = {
  title: string
  targetPercent: number
  id?: string
}

function LoadingBar({ title, targetPercent, id }: LoadingBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('progress-bar');
      const rect = element?.getBoundingClientRect();
      if (rect) {
        setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(oldPercent => {
        if (oldPercent < targetPercent) {
          return oldPercent + 1;
        } else {
          clearInterval(interval);
          return oldPercent;
        }
      });
    }, 20); // Ajusta este valor para controlar la velocidad de la transición

    return () => clearInterval(interval);
  }, [targetPercent]);
  return (
    <div className="w-1/2 m-3 px-5">
      <section className="w-full flex justify-between">
        <h1 className="text-2xl font-semibold text-white">{ title }</h1>
        <h1 className="text-2xl font-semibold text-white">{ percent }%</h1>
      </section>
      <div className="w-full h-8 bg-gray-300 rounded-full overflow-hidden">
        <div id={id} className={`h-full bg-gradient-to-r rounded-full from-purple-600 to-blue-600 transition-all duration-6000 ease-in-out`} style={{width: isVisible ? `${percent}%` : '0%'}}></div>
      </div>
    </div>
  )
}

export default LoadingBar;
