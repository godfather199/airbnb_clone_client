import axios from "axios"



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