 import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BgImage } from "../utils/imgs";
import Header from "./Header";


const GptSearch =()=>{

    return(
       <div>
        <Header />
        <div className=" absolute -z-10 ">
        <img src={BgImage} alt="bgImg" />
        </div>
        <GptSearchBar />

        <GptMovieSuggestions />

       </div>
    )
}
export default GptSearch; 