import useMovieVideo from "../hooks/useMovieVideo";
import { useState } from "react";

const Videobg = ({ movieId }) => {

  const [videoKey, setVideoKey] = useState(null);
  useMovieVideo({setVideoKey, movieId});
  
  return (
    <div className=""
    >
      <iframe
        className="w-screen aspect-video object-container -mt-1 "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>

    </div>
  );
};

export default Videobg;
