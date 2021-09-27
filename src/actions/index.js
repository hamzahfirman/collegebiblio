// Action creator
// Notes: 'export' allow exporting multiple functions
export const currUser = loginInfo => {
  return {
    type: "SIGNED_IN",
    payload: loginInfo
  };
};

export const logOutUser = () => {
  return {
    type: "LOG_OUT",
    payload: {}
  };
};

export const addedItem = increment => {
  return {
    type: "ADD_ITEM",
    payload: increment
  };
};

export const deletedItem = decrement => {
  return {
    type: "DELETE_ITEM",
    payload: decrement
  };
};

export const addedCost = increment => {
  return {
    type: "ADD_COST",
    payload: increment
  };
};

export const takeAwayCost = decrement => {
  return {
    type: "TAKE_AWAY_COST",
    payload: decrement
  };
};

export const orderPlaced = () => {
  return {
    type: "PLACED_ORDER"
  };
};
