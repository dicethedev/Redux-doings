
import { createSelector } from 'reselect';

const homePageState = (state) => state.homePage;

// export const makeSelectorUsers = homePage(state).users
export const makeSelectUsers = createSelector(
     homePageState, 
     (homePage) => homePage.users
);