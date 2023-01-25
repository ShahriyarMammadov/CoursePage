export default function favReducer(state = [], action) {
  switch (action.type) {
    case "FAVORITE":
      return [...state, { data: action.payload }];

    default:
      return state;
  }
}
