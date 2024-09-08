import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videobg from "./Videobg";
import { toggleSearchBar} from "../utils/gptSearchSlice";

const MainContainer = () =>{
    const  movies = useSelector((stroe) => stroe.moviesList?.NowplayingMovies);
    const  searchToogle = useSelector((stroe) => stroe.gpt?.showSearchBar);
    const dispatch = useDispatch();
    
    const haldleSearchToggle = ()=>{
        if(searchToogle)
        {
        dispatch(toggleSearchBar());
        }
    }


    if(!movies) return;

    const mainMovie = movies[3];

    const {original_title, 
        overview,
        id
        } = mainMovie;
    return(
        <div onClick={haldleSearchToggle}>
            <VideoTitle title =  {original_title} overview ={overview} />
            <Videobg movieId = {id} />
        </div>  
    )

}

export default MainContainer;