let initialState = {
  loading: true,
  data: undefined,
  error: undefined,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "PENDING":
      return {
        loading: true,
      };
    case "FULFILLED":
      return {
        data: action.payload,
        loading: true,
      };
    case "REJECTED":
      return {
        error: action.payload,
        loading: false,
      };
    case "SEARCH":
      return {
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
}
