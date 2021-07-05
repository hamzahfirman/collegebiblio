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
