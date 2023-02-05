export const initState = {
  theme: "dark",
};

export const PageReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: action.theme,
      };
    }
    default: {
      return state;
    }
  }
};
