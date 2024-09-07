import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { adduseTrendingMovies } from "../utils/moviesSlice";


const useTrendingMovies = ()=>{
    const dispatch = useDispatch();

    const getTrendingMovies = async ()=>{
       const data = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          API_OPTIONS
       );
       const json = await data.json();
       dispatch(adduseTrendingMovies(json.results))
       
    }
 
    useEffect(()=>{
       getTrendingMovies();
    },[]);
}

export default useTrendingMovies;