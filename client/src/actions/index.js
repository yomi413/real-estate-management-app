export const fetchBuilding = buildingId => {
  return dispatch => {
    return fetch(
      `http://localhost:3001/buildings/${buildingId}.json?uid=${
        localStorage["json.sessionUid"]
      }`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch({ type: "ADD_BUILDINGS", buildings: [data.building] });
        return data.building;
      });
  };
};

export const fetchBuildings = () => {
  return dispatch => {
    fetch(
      `http://localhost:3001/buildings.json?uid=${
        localStorage["json.sessionUid"]
      }`
    )
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "ADD_BUILDINGS", buildings: data.buildings });
      });
  };
};

export const updateBuilding = (building, id) => {
  return dispatch => {
    return fetch(
      `http://localhost:3001/buildings/${id}.json?uid=${
        localStorage["json.sessionUid"]
      }`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(building)
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch({ type: "UPDATE_BUILDING", building: data.building });
      });
  };
};

export const deleteBuilding = id => {
  return dispatch => {
    fetch(
      `http://localhost:3001/buildings/${id}.json?uid=${
        localStorage["json.sessionUid"]
      }`,
      {
        method: "DELETE"
      }
    )
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "DELETE_BUILDING", id: id });
      });
  };
};
