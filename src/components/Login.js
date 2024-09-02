import { useRef, useState } from "react";
import Header from "./Header";
import { BgImage } from "../utils/imgs";
import { checkValidData, checkValidEmail } from "../utils/validate";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

 const email = useRef(null);
 const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };

  const handleBtnClick = () => {
    // Check validation 
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
  };

  return (
    <div>
      <Header />

      <div className=" absolute">
        <img
          src={BgImage}
          alt="bgImg"
        />
      </div>
      {/* login form  */}
      <form onSubmit={(e)=> e.preventDefault()} className=" absolute flex flex-col text-white w-4/12 bg-black bg-opacity-80 left-[50%] top-[65%] transform translate-x-[-50%] translate-y-[-50%] p-14  ">
        <h1 className="text-4xl font-bold">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        { !isSignForm && <input
          type="text"
          placeholder="Full Name"
          className="pt-[1.4rem] pb-[0.4rem] pr-[1rem] pl-[1rem]  bg-[#171512] rounded-md mt-7 w-full "
        />}

        <input
          ref={email}
          // onkeypress={checkValidEmail}
          type="text"
          placeholder="Email or mobile number"
          className="pt-[1.4rem] pb-[0.4rem] pr-[1rem] pl-[1rem]  bg-[#171512] rounded-md mt-7 w-full "
        />
        <p className="text-[#eb3940] text-sm "
        >{errorMsg && errorMsg.includes("email")&& " Please enter a valid email address"}</p>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="pt-[1.4rem] pb-[0.4rem] pr-[1rem] pl-[1rem] bg-[#171512] rounded-md mt-5 w-full "
        />
        <p className=" text-[#eb3940]  text-sm"
        >{errorMsg && errorMsg.includes("password")&& "X Please enter a valid email address"}</p>

        <button className="p-2 mt-5 mb-3 rounded-md  w-full bg-[#e50914]" onClick={handleBtnClick}>
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="text-center">OR</div>
        <button className="p-2 mt-3 bg-white bg-opacity-30 w-full rounded-md ">
          Use a sign in code
        </button>
        <p className="text-center mt-4">Forgot password?</p>

        {/* // Remember me */}
        { isSignForm && <div className="mt-4 text-md">
          <input type="checkbox" className=" w-4 h-4 mr-2" /> Remember me
        </div>}
        <p className="mt-4 text-gray-300">
          {isSignForm ? "New to Neftflix?" : "Already registered?"}
          <span 
            onClick={toggleSignInForm}
            className=" cursor-pointer text-white hover:text-red-500 hover:underline "
          >
            {isSignForm ? " Sign Up Now." : " Sign in Now."}
          </span>
        </p>

        <p className="mt-4 text-sm text-gray-400 ">
        This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className=" underline text-red-400"
        > Learn more.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
