import React,{useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile(){

//get value and display
    const {user} =useContext(UserContext)
   if(!user) return <div>please login</div>
   return <div>Welcom{user.username}</div>
}

export default Profile