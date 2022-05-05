import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import Axios from 'axios';
import { setUsers } from './action';
import { UsersList } from './usersList';

//new object is create here
const stateSelector = createSelector(makeSelectUsers, (users) => ({
     users
}));

//create after the fetchUsers through Axios
const  actionDispatch = (dispatch) => ({
  setUsers: (users) => dispatch(setUsers(users)),
});

export function HomePage(props) {
     const { users } = useSelector(stateSelector);

     const { setUsers } = actionDispatch(useDispatch());

     // console.log("Users :", users);

     const fetchUsers = async () => {
         const  response = await Axios.get("https://reqres.in/api/users").catch(
              (err) => {
              //err = error
           console.log("Err :", err);
         });

     //   console.log("Users :", response.data.data);
      setUsers(response.data.data);
     };

     useEffect(() => {
         fetchUsers();
     }, []);
  
     console.log("Users :", users);

     return (
          <div>
               <UsersList />
          </div>
     )
};