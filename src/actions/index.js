// Action creator
// Notes: 'export' allow exporting multiple functions
export const currUser = loginInfo => {
  return {
    type: "SIGNED_IN",
    payload: loginInfo
  };
};

export const addedItem = increment => {
  return {
    type: "ADD_ITEM",
    payload: increment
  };
};
