import { useSelector } from 'react-redux'
import {Properties} from '../../components'



function Whishlist() {
  const {properties} = useSelector(state => state.property)


  return (
    <div className="">
      <div className="mb-5">
        <span className="text-2xl text-red-500 font-bold">WHISHLIST</span>
      </div>
      <div className="">
        <Properties />
      </div>
    </div>
  );
}

export default Whishlist    