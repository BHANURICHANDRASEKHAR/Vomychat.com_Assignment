import React, { useEffect, useState } from 'react'
export const UserContextApi=React.createContext();
export default function UserContext(props) {
    const [Category,SetCategory]=useState('')
    const [Topics,SetTopics]=useState([])
    useEffect(()=>{
     SetTopics([])
    },[Category])
  return (
    <UserContextApi.Provider value={{Category,SetCategory,Topics,SetTopics}}>
      {props.children}
    </UserContextApi.Provider>
  )
}
