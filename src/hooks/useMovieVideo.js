import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieVideo = ({setVideoKey, movieId}) =>{
    const getMoiveVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        setVideoKey(json?.results[13]?.key);
      };
    
      useEffect(() => {
        getMoiveVideo();
      }, []);
}

export default useMovieVideo;