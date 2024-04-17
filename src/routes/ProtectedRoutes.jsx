import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { authenticate_User_Service } from "../services/userService"
import { Backdrop, CircularProgress } from "@mui/material"
import { Navigate } from "react-router-dom"



function ProtectedRoutes({children}) {
  const {current_User} = useSelector(state => state.user)
  const [authenticationToken, setAuthenticationToken] = useState(true)
  const [isLoading, setIsLoading] = useState(true)


  // Check if user is logged in
  useEffect(() => {
    const fetch_Data = async () => {
        const {success} = await authenticate_User_Service()
        setAuthenticationToken(success) 
        setIsLoading(false)
    }

    fetch_Data()
  }, [])


  if(isLoading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }


  if(!authenticationToken) {
    return <Navigate to = '/' />
  }


  return children

}

export default ProtectedRoutes