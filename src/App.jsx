import { Toaster } from "react-hot-toast"
import Routes from "./routes/Routes"
import axios from "axios"



// Setting axios defaults globally
export const backend_URL = import.meta.env.VITE_BACKEND_URL

axios.defaults.baseURL = backend_URL
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

// // react-datepicker
// // date-fns
// // 119328
// //Something added