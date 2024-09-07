import { IMG_URL } from "../utils/constants";

const SearchedMovieDisplay = ({searchedMoive})=> {
    return(
        <>
            <div>{ searchedMoive && 
            <div> 
                <div className=" flex ml-4 items-start mb-4 "> 

                   <img alt="poster" 
                     className=" w-20 rounded-sm  "
                     src={IMG_URL + searchedMoive?.poster_path }/> 
                   <div className=" ml-4 ">
                      <p>
                      {searchedMoive.original_title}    
                      </p>
                      <p className=" text-sm text-slate-200 overflow-hidden pr-4  h-20 mt-2 ">
                      {searchedMoive.overview}    
                      </p>
                    </div>

                </div>
            </div>    
         } </div>  
        </>
    )
} 
export default SearchedMovieDisplay;