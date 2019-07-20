const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BUILDINGS":
      return {
        ...state,
        buildings: action.buildings
      };

    default:
      return state;
  }
};

export default rootReducer;
