import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'


const PrivateRoutes = ({loggedIn}) => {
  
//   }
  return (
    loggedIn ? <Outlet/> : <Navigate to='/login' />
  )
}

export default PrivateRoutes