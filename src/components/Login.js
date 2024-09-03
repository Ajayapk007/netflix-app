import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { BgImage } from "../utils/imgs";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorMsgAuth, setErrorMsgAuth] = useState(null);

  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };

  const handleBtnClick = () => {
    // Check validation
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    //sign UP
    if (!isSignForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user,{
            displayName: name.current.value
          })
          .then(()=>{
            const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
            }))

            navigate("/browser");
          })
          .catch((error) => {
            setErrorMsgAuth(error.code);
          })

        })
        .catch((error) => {
          const errorMessage = error.code;
          setErrorMsgAuth(errorMessage);
        });
    }

    //sign In
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        // const user = userCredential.user;
        navigate("/browser");
        })
        .catch((error) => {
          const errorMessage = error.code;
          setErrorMsgAuth(errorMessage);
        });
    }

  };

  return (
    <div className="">
      <Header />

      <div className=" absolute -z-10 sm:z-0">
        <img src={BgImage} alt="bgImg" />
      </div>
      {/* login form  */}
      <div className="flex  justify-center bg-black  ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" relative mt-28 w-full p-5 flex flex-col text-white sm:w-[450px] sm:h-[723px] bg-black bg-opacity-80 sm:py-12 sm:px-16 "
        >
          <h1 className="text-4xl font-bold">
            {isSignForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="pt-[1.4rem] pb-[0.4rem] pr-[1rem] pl-[1rem]  bg-[#171512] rounded-md mt-7 w-full "
            />
          )}

          <input
            ref={email}
            // onkeypress={checkValidEmail}
            type="text"
            placeholder="Email or mobile number"
            className="pt-[1.4rem] pb-[0.4rem] pr-[1rem] pl-[1rem]  bg-[#171512] rounded-md mt-7 w-full "
          />
          <p className="text-[#eb3940] text-sm ">
            {errorMsg &&
              errorMsg.includes("email") &&
              " Please enter a valid email address"}
          </p>

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="pt-[1.4rem] pb-[0.4rem] pr-[1rem] pl-[1rem] bg-[#171512] rounded-md mt-5 w-full "
          />
          <p className=" text-[#eb3940]  text-sm">
            {errorMsg &&
              errorMsg.includes("password") &&
              "X Please enter a valid email address"}
          </p>
          
          <p className="text-[#eb3940]  text-sm mt-5 ">
            {errorMsgAuth &&  "user not found" }
          </p>

          <button
            className="p-2 mt-1 mb-3 rounded-md  w-full bg-[#e50914]"
            onClick={handleBtnClick}
          >
            {isSignForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="text-center">OR</div>
          <button className="p-2 mt-3 bg-white bg-opacity-30 w-full rounded-md ">
            Use a sign in code
          </button>
          <p className="text-center mt-4">Forgot password?</p>

          {/* // Remember me */}
          {isSignForm && (
            <div className="mt-4 text-md">
              <input type="checkbox" className=" w-4 h-4 mr-2" /> Remember me
            </div>
          )}
          <p className="mt-4 text-gray-300">
            {isSignForm ? "New to Neftflix?" : "Already registered?"}
            <span
              onClick={toggleSignInForm}
              className=" cursor-pointer text-white hover:text-red-500 hover:underline "
            >
              {isSignForm ? " Sign Up Now." : " Sign in Now."}
            </span>
          </p>

          <p className="my-4 text-sm text-gray-400  ">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className=" underline text-red-400"> Learn more.</span>
          </p>
        </form>
      </div>

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

          <select className=" my-8 bg-black p-1 outline rounded-sm ">
            <option>अA English</option>
            <option>अA हिन्दी</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Login;
