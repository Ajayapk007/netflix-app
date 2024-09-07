import { useSelector } from "react-redux";
import MoviesListCon from "./MoviesListCon";

const SecondContainer = () =>{

    const movies = useSelector((store)=> store?.moviesList );

    return(
        <div className="   bg-black">
          <div className=" -mt-80 pl-14 relative z-20 "
          >
            <MoviesListCon title ={"Now Playing" } movies={movies?.NowplayingMovies}  />
            <MoviesListCon title ={"Popular Movies" } movies={movies?.PopularMovies}  />
            <MoviesListCon title ={"Trending Movies" } movies={movies?.TrendingMovies}  />
            <MoviesListCon title ={"upcoming Moives" } movies={movies?.UpcomingMovies}  />
          </div>
        </div>
    )
}

export default SecondContainer;