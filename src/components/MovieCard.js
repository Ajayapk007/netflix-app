import {IMG_URL} from "../utils/constants";

const MovieCard = ({ movie }) => {


    return (
      <div className="w-36  md:w-48 pr-4  ">
        <img alt="Movie Card" src={IMG_URL + movie.poster_path} />
      </div>
    );
  };
  export default MovieCard;
