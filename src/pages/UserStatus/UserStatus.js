import React from 'react'
/** style */
import * as El from './UserStatus.style'
/** components */
import UserProfile from 'components/UserProfile/UserProfile'

const UserStatus = () => {
  return (
    <El.UserStatusContainer>
      USER STATUS
      <UserProfile />
    </El.UserStatusContainer>
  )     
}

export default UserStatus