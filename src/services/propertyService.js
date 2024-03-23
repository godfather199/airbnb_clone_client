import axios from "axios"


export const new_Property_Service = async (propertyInfo) => {
  const { data } = await axios.post(`/api/property/new-property`, propertyInfo);

  return data
};



export const fetch_All_Properties_Service = async () => {
  const {data} = await axios.get(
    `/api/property/all-properties`
  )

  return data
}



export const fetch_Property_By_Category_Service = async (category) => {
  const {data} = await axios.get(
    `/api/property/${category}`
  )

  return data
}



export const property_By_Filters_Service = async ({minPrice, maxPrice, maxDistance}) => {
  const { data } = await axios.get(
    `/api/property/filters?min_Price=${minPrice || 0}&max_Price=${
      maxPrice || 1000000
    }&max_Distance=${maxDistance || 10000}`
  );

  return data
}



export const fetch_Single_Property_Service = async (propertyId) => {
  const {data} = await axios.get(
      `/api/property/single-property/${propertyId}`
  )

  return data
}



export const fetch_Search_Bar_Results_Service = async (search_Term) => {
  const {data} = await axios.get(
    `/api/property/search?search_Location=${search_Term}`
  )

  return data
}