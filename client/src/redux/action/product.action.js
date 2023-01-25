import axios from "axios";

export const productAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(`http://localhost:3000/products`);
      dispatch({
        type: "FULFILLED",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};

export const searchAction = (data) => {
  return {
    type: "SEARCH",
    payload: data,
  };
};
