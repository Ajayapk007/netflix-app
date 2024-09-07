import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { NetflixLogo, UserIcon } from "../utils/imgs";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { EmptyStore } from "../utils/moviesSlice";
import { toggleGptSearchView } from "../utils/gptSearchSlice";


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const toggleBool = useSelector(store => store.gpt.showGptSearch);
  

  const handelSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
        dispatch(EmptyStore());
      }
    });
    // unsubcriibe is call when component unmounts
    return () => unsubcribe();
  }, []);

  const toggleGotSearch = ()=>{
   //toggle Gpt search 
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="absolute flex  justify-between sm:px-12 bg-gradient-to-b from-black w-full z-10  ">
      <img className="w-40 sm:w-56 " src={NetflixLogo} alt="NetflixLogo" />

      {user && (
        <div className=" flex items-center gap-2 ">
          
          { !toggleBool && <div className=" cursor-pointer w-9 mx-3"
          onClick={toggleGotSearch}
          >
            <img src="https://img.icons8.com/?size=100&id=2sWrwEXiaegS&format=png&color=FFFFFF" />  
          </div>  }
          <img src={UserIcon} className=" h-12 rounded-md " alt="UserIcon" />

          <select className=" w-[24px] ">
            <option></option>
            <option>Ajay Pal</option>
            <option>Kids</option>
          </select>

          <button
            className=" bg-red-500 px-3 py-2 rounded-md"
            onClick={handelSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
