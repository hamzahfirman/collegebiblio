import { combineReducers } from "redux";
// let currCount = 0;
const itemsReducer = () => {
  return [
    { brand: "Nike", color: "Red", size: "10" },
    { brand: "Adidas", color: "Red", size: "12" },
    { brand: "Crocs", color: "Blue", size: "13" },
    { brand: "Nike", color: "Yellow", size: "11" }
  ];
};

const newUsersReducer = (listOfUsers = [], action) => {
  if (action.type === "SIGN_UP") {
    return [...listOfUsers, action.payload];
  }
  return listOfUsers;
};

const selectedItem = (currCount = 0, action) => {
  if (action.type === "ADD_ITEM") {
    return currCount + action.payload;
  }

  return currCount;
};

// Notes:
// Each key holds the return values from its
// associated reducers
export default combineReducers({
  users: newUsersReducer,
  items: itemsReducer,
  selectedItem: selectedItem
});
