import { useDispatch } from "react-redux"
import { SUPPORTED_LANGUAGES } from "../utils/constants"
import {changeLanguage} from '../utils/configSlice'

const Footer = () =>{
    const dispact = useDispatch();
    const handleLanguageChange = (e)=>{ 
        dispact(changeLanguage(e.target.value));
    }
    return(
    <div>
            {/* //footer */}
      <div className=" pt-72 bg-black  relative  ">
        <div className=" w-5/6  m-auto text-gray-300 ">
          <p className=" my-4">Questions? Call 000-800-919-1694 </p>

          <ul className="flex gap-x-36 flex-wrap ">
            <li className=" mt-4 underline">FAQ</li>
            <li className=" mt-4 underline">Help Centre</li>
            <li className=" mt-4 underline">Help Centre</li>
            <li className=" mt-4 underline">Terms of Use</li>
            <li className=" mt-4 underline">Privacy</li>
            <li className=" mt-4 underline">Cookie Preferences</li>
            <li className=" mt-4 underline">Corporate Information</li>
          </ul>

          <select  onChange={handleLanguageChange}
          className=" my-8 bg-black p-1 outline rounded-sm ">
            { SUPPORTED_LANGUAGES.map(lang => <option value={lang.identifier} > अA  {lang.name} </option> )} 
          </select>
        </div>
      </div>
    </div>

    )
}

export default Footer