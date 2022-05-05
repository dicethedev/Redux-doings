import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const UsersImage = styled.div`
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


const stateSelector = createSelector(makeSelectUsers, (users) => ({
     users
}));

export function UsersList(props) {
      const { users } = useSelector(stateSelector);

      const isEmptyUsers = !users || (users && users.length === 0);

      // ========================= UserPage functionality ======================
      //navigate for webpage
      const navigate = useNavigate();

      //this for other folder called UserPage
      const goToUserPage = (id) => {
          // history.push(`/user/${id}`);
          navigate(`/user/${id}`);
      };

      // ======================================================================

      if(isEmptyUsers) return null;

           return (
                <UsersContainers>
                  {users.map((user, index) => (
                    <UserWrapper key={index} onClick={() => goToUserPage(user.id)}>
                         <UsersImage>
                              <img src={user.avatar} />
                         </UsersImage>
                         <UserName>{ user.first_name} { user.last_name }</UserName>
                    </UserWrapper>
                  ))}   
                </UsersContainers>
           )
}