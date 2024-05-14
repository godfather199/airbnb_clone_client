import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { set_Google_Entry_User } from "../../store/slices/userSlice"
import toast from "react-hot-toast"

export const GoogleEntry = ({children}) => {
    const dispatch = useDispatch()

    const {google_Entry} = useSelector(state => state.user)


    // Log-in user through oAuth
    useEffect(() => {
        const login_User = async () => {
            const {data} = await axios.get(`/auth/login/success`)

            dispatch(set_Google_Entry_User(data.user))

            
        }

        if(google_Entry) {
            login_User()
        }

        
    }, [])

    return children
}