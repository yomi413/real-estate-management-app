const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BUILDINGS":
      return {
        ...state,
        buildings: action.buildings
      };

    case "DELETE_BUILDING":
      return {
        ...state,
        buildings: state.buildings.filter(building => building.id !== action.id)
      };

    case "UPDATE_BUILDING":
      return {
        ...state,
        buildings: state.buildings.map(building =>
          building.id === action.building.id ? action.building : building
        )
      };

    default:
      return state;
  }
};

export default rootReducer;
