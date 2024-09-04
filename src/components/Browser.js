import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";


/* 
Main section 
   video Backgroun
   video title
Secondary section
   movies list
         top moivies
            cards
         trendig movies
            cards
         Bollywood movies
            cards
         Kids movies
            cards
footer
   normal footer
*/

const Browser = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header />

      <MainContainer />

      <SecondContainer />
    </div>
  );
};

export default Browser;
