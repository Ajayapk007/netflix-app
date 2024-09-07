import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import {  useSelector } from "react-redux";

const Browser = () => {
  
  const toggleBool = useSelector(store => store.gpt.showGptSearch);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();  
  useUpcomingMovies();

  return (
    <div>
      <Header />

      { toggleBool  && <GptSearch />}

      <MainContainer />

      <SecondContainer />
    </div>
  );
};

export default Browser;
