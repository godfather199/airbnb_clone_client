import { Toaster } from "react-hot-toast"
import Routes from "./routes/Routes"
import axios from "axios"



// Setting axios defaults globally
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials = true


function App() {
  

  return (
    <div className="">
      <Routes />
      <Toaster />
    </div>
  )
}

export default App

// react-datepicker
// date-fns
// 119328
//Something added