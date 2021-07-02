import { combineReducers } from "redux";

const itemsReducer = () => {
  return [
    { item: "Nike", color: "Red", size: "10" },
    { item: "Adidas", color: "Red", size: "12" },
    { item: "Crocs", color: "Blue", size: "13" },
    { item: "Nike", color: "Yellow", size: "11" }
  ];
};

const newUsersReducer = (listOfUsers = [], action) => {
  if (action.type === "SIGN_UP") {
    return [...listOfUsers, action.payload];
  }
  return listOfUsers;
};

// const selectedItem = () => {}

export default combineReducers({
  users: newUsersReducer,
  iterms: itemsReducer
});
