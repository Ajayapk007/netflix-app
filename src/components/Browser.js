import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchBar from "./SearchBar";
import {  useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import Footer from "./Footer";
import GptSearch from "./GptSearch";

const Browser = () => {
  
  const toggleBar = useSelector(store => store.gpt.showSearchBar);
  const togglegpt = useSelector(store => store.gpt.showSearchGpt);
  const fetchedData = useSelector(store => store.moviesList.NowplayingMovies) 
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();  
  useUpcomingMovies();
  
    return fetchedData === null ? <Shimmer /> : (
    <div>
      <Header />

      { toggleBar  && <SearchBar />}

      { togglegpt ? <GptSearch /> :<>
        <MainContainer />

      <SecondContainer />
      </>
      }

      <Footer />
    </div>
  );
};

export default Browser;
