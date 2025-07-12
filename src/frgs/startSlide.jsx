import { useEffect, useState } from "react";

const StartSlide = ({ delay, color, zIndex, direction = 'up' }) => {
    const [slide, setSlide] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setSlide(true), delay);
        return () => clearTimeout(timer);
    }, [delay])


    const translate =
        (direction === 'up' && (slide ? '-translate-y-full' : 'translate-y-0')) ||
        (direction === 'down' && (slide ? 'translate-y-full' : 'translate-y-0')) ||
        (direction === 'left' && (slide ? '-translate-x-full' : 'translate-x-0')) ||
        (direction === 'right' && (slide ? 'translate-x-full' : 'translate-x-0')) ||
        'translate-y-0'

    return (
        <div
            className={`w-full h-full absolute top-0 left-0 ${zIndex} ${color}
      transition-transform duration-[1000ms] ease-in-out ${translate}`}
        />
    )

}

export default StartSlide;