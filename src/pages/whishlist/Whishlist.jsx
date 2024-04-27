import { useSelector } from 'react-redux'
import {Properties} from '../../components'



function Whishlist() {
  const {properties} = useSelector(state => state.property)


  return (
    <div className="">
      <Properties />
    </div>
  )
}

export default Whishlist    