import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videobg from "./Videobg";

const MainContainer = () =>{
    const  movies = useSelector((stroe) => stroe.moviesList?.NowplayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];

    const {original_title, 
        overview,
        id
        } = mainMovie;
    return(
        <div>
            <VideoTitle title =  {original_title} overview ={overview} />
            <Videobg movieId = {id} />
        </div>  
    )

}

export default MainContainer;