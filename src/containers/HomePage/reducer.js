
import { ActionTypes } from './constants';


//storing default in reducer folder
const defaultState = {
   //   users: ['No Users!']
     users: [],
};

export default function homePageReducer(state = defaultState, action) {
   switch (action.type) {
      //declared after calling dispatch in index.jsx
      case ActionTypes.SET_USERS:
         return { ...state, users: action.payload };
      default: 
      return state;
   }
}