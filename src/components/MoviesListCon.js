import MoiveCard from "./MovieCard";

 const MoviesListCon = ({title, movies}) =>{

    // if(!movies) return;

    return(
        <div className=" p-3   ">
                <h1 className=" text-3xl font-semibold py-4  text-white">{title}</h1>
            <div className=" flex overflow-x-scroll ScroolBar ">         
                <div className=" flex  transition-transform duration-300 ease-in-out transform  ">
                    { movies?.map((signleMoive)=>( <MoiveCard key={signleMoive?.id} movie={signleMoive}  /> )) }
                </div>
            </div>
        </div>
    )
 }

 export default MoviesListCon;
