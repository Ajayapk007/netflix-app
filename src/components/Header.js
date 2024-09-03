import {  useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { NetflixLogo, UserIcon } from "../utils/imgs";
import { signOut } from "firebase/auth";
import {  useNavigate } from "react-router-dom";

const Header = () => {

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  

  const handelSignOut = () =>{
    signOut(auth);
    navigate("/")
  }

  return (
    <div className="absolute flex  justify-between sm:px-12 bg-gradient-to-b from-black w-full z-10  ">
      <img
        className="w-40 sm:w-56 "
        src={NetflixLogo}
        alt="NetflixLogo"
      />

      { user &&
        <div className=" flex items-center gap-2 ">
        
        <p
        className=" text-xl text-red-800 font-bold "
        >{user.displayName }</p>
        <img 
        src={UserIcon}
        className=" h-14 rounded-sm "
         alt="UserIcon" />

        <select className=" w-[24px] ">
            <option></option>
            <option>Ajay Pal</option>
            <option>Kids</option>
        </select>

        <button className=" bg-red-500 px-3 py-2 rounded-md"
         onClick={handelSignOut}>
          Sign Out
        </button>

      </div>}
    </div>
  );
};

export default Header;
