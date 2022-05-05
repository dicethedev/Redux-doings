
import { ActionTypes } from './constants';

//storing default in reducer folder
const defaultState = {
     user: null,
};

export default function userPageReducer(state = defaultState, action) {
   switch (action.type) {
      //declared after calling dispatch in index.jsx
      case ActionTypes.SET_USER:
         return { ...state, user: action.payload };
      default: 
      return state;
   }
}