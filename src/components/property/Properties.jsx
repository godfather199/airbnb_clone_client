import {Property, SkeletonProperty} from '../'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {  thunk_Fetch_All_Properties } from '../../store/thunks/propertyThunk'
import { useLocation } from 'react-router-dom'
import { thunk_property_From_Whishlist } from '../../store/thunks/userThunk'
import { set_Whishlist_Properties } from '../../store/slices/propertySlice'
import { reset_Is_Success_Whishlist } from '../../store/slices/userSlice'



function Properties() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { isLoading, properties } = useSelector((state) => state.property);
  const { is_Success_Whishlist, whishlist_Properties, current_User } =
    useSelector((state) => state.user);


  // Update the properties in 'propertySlice.js'
  useEffect(() => {
    if (is_Success_Whishlist) {
      dispatch(set_Whishlist_Properties(whishlist_Properties));
    }

    return () => dispatch(reset_Is_Success_Whishlist());
  }, [is_Success_Whishlist]);



  // Fetch all properties
  useEffect(() => {
    if (pathname === "/whishlist") {
      dispatch(thunk_property_From_Whishlist());
    } else {
      dispatch(thunk_Fetch_All_Properties());
    }
  }, [current_User]);

  // console.log('Property: ', properties)


  return (
    <div className="">
      {isLoading ? (
        Array(5)
          .fill("")
          .map((item, idx) => <SkeletonProperty key={idx} />)
      ) : (
        <div
          // style={{ border: "3px solid green" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {properties?.map((item) => (
            <Property key={item?._id} property={item} />
            // <Property property={properties[0]} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Properties