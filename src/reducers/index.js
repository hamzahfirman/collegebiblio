import { combineReducers } from "redux";

const ALLSALEITEMS = [
  { brand: "doritos", flavor: "Ranch", quantity: 0, cost: 2.55 },
  { brand: "kitkat", flavor: "Green Tea", quantity: 0, cost: 1.26 },
  { brand: "cocacola", flavor: "Original", quantity: 0, cost: 7.88 }
];
// let currCount = 0;
const itemsReducer = (items = ALLSALEITEMS) => {
  return items;
};
// const newUsersReducer = (listOfUsers = [], action) => {
//   if (action.type === "SIGN_UP") {
//     if (!listOfUsers.filter(user => user === action.payload.username)) {
//       return [...listOfUsers, action.payload];
//     }
//   }
//   return listOfUsers;
// };
const userLoginReducer = (listOfUsers = {}, action) => {
  if (action.type === "SIGNED_IN") {
    listOfUsers = action.payload;
    return listOfUsers;
  } else if (action.type === "LOG_OUT") {
    listOfUsers = action.payload;
  }

  return listOfUsers;
};

const selectedItem = (currCount = 0, action) => {
  if (action.type === "ADD_ITEM") {
    // Add based on their type
    let selected = action.payload.item.brand;
    let currItem = ALLSALEITEMS.filter(item => item.brand === selected);
    currItem[0].quantity += action.payload.increment;

    return currCount + action.payload.increment;
  } else if (action.type === "DELETE_ITEM" && currCount >= 0) {
    // Delete based on their type
    let selected = action.payload.item.brand;
    let currItem = ALLSALEITEMS.filter(item => item.brand === selected);
    if (currItem[0].quantity > 0) {
      currItem[0].quantity -= action.payload.increment;
      return currCount - action.payload.increment;
    }
  }

  return currCount;
};

const editCost = (orderCost = 0, action) => {
  if (action.type === "ADD_COST") {
    return orderCost + action.payload;
  } else if (action.type === "TAKE_AWAY_COST" && orderCost >= 0) {
    return orderCost - action.payload;
  }

  return orderCost;
};

// Notes:
// Each key holds the return values from its
// associated reducers
export default combineReducers({
  user: userLoginReducer,
  items: itemsReducer,
  selectedItem: selectedItem,
  currentCost: editCost
});
