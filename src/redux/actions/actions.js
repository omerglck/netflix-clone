import { actionTypes } from "../actionTypes";
import axios from "axios";
import { options } from "./../../constants";

//! Senkron action
export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

//! Asenkron action
//* Hem verileri çeksin hemde reducer'ı

export const getMovies = () => {
  return async function (dispatch) {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    dispatch({
      type: actionTypes.SET_MOVIES,
      payload: res.data,
    });
  };
};
