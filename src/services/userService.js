import axios from "axios"
import toast from "react-hot-toast";



export const register_Service = async (info) => {
    const {data} = await axios.post(
        `/api/user/register`, info
    )

    return data
}



export const login_Service = async (info) => {
    const {data} = await axios.post(
        `/api/user/login`, info
    )

    return data
}



export const add_To_Whishlist_Service = async (property_Id) => {
  const { data } = await axios.post(
    `/api/user/add-whishlist?property_Id=${property_Id}`
  );

  return data;
};



export const properties_From_Whishlist_Service = async () => {
    const {data} = await axios.get(
        `/api/user/whishlist`
    ) 

    return data
}



export const remove_From_Whishlist_Service = async (propertyId) => {
  const {data} = await axios.delete(
    `/api/user/remove-whishlist?property_Id=${propertyId}`
  )

  return data
}



export const update_User_Info_Service = async (update_User) => {
  const {data} = await axios.put(
    `/api/user/update-user`, {
      update_User
    }
  )

  return data
}



export const logout_User_Service = async () => {
  const {data} = await axios.get(
    `/api/user/logout`
  )

  return data
}



export const authenticate_User_Service = async () => {
  try {
    const {data} = await axios.get(
      `/api/user/authenticate`
    )

    return data
  } catch (error) {
    toast.error("You're not logged in", {
      duration: 1500,
      position: 'bottom-center'
    })
    
    return error.response.data
  }
}