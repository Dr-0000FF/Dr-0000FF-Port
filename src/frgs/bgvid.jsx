import bgvideo from '../assets/vect.mp4';

const BgVideo = () => {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-100 animate-fadeIn"
        >
            <source src={bgvideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default BgVideo
