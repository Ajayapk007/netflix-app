import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstant";
import Footer from "./Footer"

const GptSearchBar = ()=>{

    const whichLang = useSelector(stroe => stroe.config.lang);

     return <>
     <div className=" h-[100vh] ">
      <div className=" pt-[10%] flex justify-center  ">
        <form
         className=" bg-black w-1/2  grid grid-cols-12 ">
            <input type="text"
                className=" m-4 p4 col-span-9 "
                placeholder={lang[whichLang].gptplaceholder}
                />
            <button
            className="  col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg   "
            >{lang[whichLang].gptsearch}</button>
            
        </form> 
         </div>

     </div>
        <Footer />
    </>
}
export default GptSearchBar;