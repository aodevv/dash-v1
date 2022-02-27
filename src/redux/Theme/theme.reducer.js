const INITIAL_STATE = {
  mode: "light",
  color: "blue",
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
