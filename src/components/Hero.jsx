import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants";

const Hero = () => {
  const state = useSelector((store) => store.movieReducer);
  // console.log("redyx", state.populerMovies[0]);

  const [randomMovie, setRandomMovie] = useState({});

  useEffect(() => {
    // console.log("1.use effect", state.isLoading);
    const randomIndex = Math.floor(Math.random() * state.populerMovies.length);
    const randomMovie = state.populerMovies[randomIndex];
    setRandomMovie(randomMovie);
  }, []);

  useEffect(() => {
    // console.log("2.use effect", state.isLoading);

    const randomIndex = Math.floor(Math.random() * state.populerMovies.length);
    const randomMovie = state.populerMovies[randomIndex];
    setRandomMovie(randomMovie);
  }, [state.isLoading]);

  return (
    <div className="row p-4">
      {/* Yükleme sürüyorsa ekrana loading bas*/}
      {state.isLoading && <p>Loading...</p>}

      {/* Yükleme bittiyse  */}
      {!state.isLoading && (
        <>
          <div className="col-md-6 mt-3 d-flex flex-column align-items-center justify-content-center gap-3">
            <h1 className="text-center">{randomMovie?.title}</h1>
            <p>{randomMovie?.overview}</p>
            <p className="text-warning">IMDB: {randomMovie?.vote_average}</p>
            <div className="d-flex gap-3">
              <button className="btn btn-danger">Film İzle</button>
              <button className="btn btn-info">Listeye Ekle</button>
            </div>
          </div>
          <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded"
              src={`${baseImgUrl}${randomMovie?.backdrop_path}`}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Hero;
