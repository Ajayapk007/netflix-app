import { useSelector } from "react-redux";
import SearchedMovieDisplay from "./SearchedMovieDisplay";


const FilterMoive = () =>{

    const filteringMovies  = useSelector( stroe  => stroe?.moviesList?.NowplayingMovies);
    const movieToSearch  = useSelector( stroe  => stroe?.gpt?.searchedMovie);
    const searchedMoive 
    = filteringMovies?.filter((movie) => 
        movie.original_title.toLowerCase().includes(movieToSearch?.toLowerCase())
    );
    console.log(searchedMoive);

    return(
        <div>
        {/* <div>{ searchedMoive[0] && 
            <div> 
                <div className=" flex ml-4 items-start mb-4 "> 

                   <img alt="poster" 
                     className=" w-20 rounded-sm  "
                     src={IMG_URL + searchedMoive[0]?.poster_path }/> 
                   <div className=" ml-4 ">
                      <p>
                      {searchedMoive[0].original_title}    
                      </p>
                      <p className=" text-sm text-slate-200 overflow-hidden pr-4  h-20 mt-2 ">
                      {searchedMoive[0].overview}    
                      </p>
                    </div>

                </div>
            </div>    
         } </div>   */}
        { 
            searchedMoive?.map(movie => <SearchedMovieDisplay key={searchedMoive.id} searchedMoive={movie} /> )
        }
        </div>
    )   


}

export default FilterMoive;