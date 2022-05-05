import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { setUser } from './action';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUser } from './selectors';
import styled from 'styled-components';

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const UserImage = styled.div`
  width: 7rem;
  height: 7rem;

  img {
       width: 100%;
       height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;


const UserEmail = styled.h3`
  font-size: 18px;
  color: #353535;
  margin: 0;
`;



//new object is create here
const stateSelector = createSelector(makeSelectUser, (user) => ({
     user
}));


const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});

export function UserPage(props) {
     const { user }  = useSelector(stateSelector);

     const { setUser } = actionDispatch(useDispatch());

     const { userId } = useParams();

     const  fetchUser = async (id) => {
          const response = await Axios.get(`https://reqres.in/api/users/${id}`).catch((err) => {
             console.log("Err :", err);
          }); 
            
          console.log("User :", response.data.data);

          if(response) setUser(response.data.data);
     }

     useEffect(() => {
        if(userId && userId !== "")
        fetchUser(userId);
     }, [userId]);

     //  console.log("User :", user);
     //Loader page for the user
     // ======== if the user is not found.. keep Loading ======================

     if (!user)
     return <div>Loading.........</div>;

     //===============================================

  return (
     <UserContainer>
          <UserWrapper>
          <UserImage>
               <img src={user.avatar} />
          </UserImage>
          <UserName>{ user.first_name } { user.last_name }</UserName>
          <UserEmail>{ user.email }</UserEmail>
          </UserWrapper>
     </UserContainer>
  )
}