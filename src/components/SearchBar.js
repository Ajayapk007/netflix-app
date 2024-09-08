import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addSearchMoive } from "../utils/gptSearchSlice";
import FilterMoive from "./FilterMovie";

const SearchBar = () =>{
    const dispatch = useDispatch();    
    const searching = useRef();

    const handleSearch = ()=>{
        dispatch(addSearchMoive(searching.current.value));
    }

    return(
        <div className=" h-[90vh] w-[40vw]  flex flex-col rounded-lg   bg-black absolute z-40 right-[18rem]   bg-opacity-80 ">
            <div className=" ">
                <input 
                ref={searching}
                onChange={handleSearch}
                type="text" 
                placeholder="What would you like to watch today?"
                className="w-[80%] ml-3 h-16 mt-8 bg-[#111212] pl-4  text-white text-xl rounded-xl focus:outline-none "
                />
                <button className=" py-2 px-5 bg-red-700 text-white rounded-lg ml-4   ">
                    Search
                </button>
            </div>

            <div className=" text-white pl-7 pt-4 ScroolBar overflow-scroll  ">
                <FilterMoive />
            </div>
        </div>
    )
}

export default SearchBar;