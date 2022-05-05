
import { createSelector } from 'reselect';

const userPageState = (state) => state.userPage;

// export const makeSelectorUsers = homePage(state).users
export const makeSelectUser = createSelector(
     userPageState, 
     (userPage) => userPage.user
);