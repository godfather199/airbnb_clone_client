import { Link, useNavigate } from 'react-router-dom'
import {CreateProperty, HostDashboardTabs} from '../'
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';


function HostDashboard() {
  const { current_User } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div
      // style={{ border: "3px solid red" }}
      className=" w-[28rem] sm:w-[37rem] md:w-[45rem] lg:w-[60rem] xl:w-[75rem] h-auto flex flex-col gap-5"
    >
      <div className="">
        <h1 className=" text-2xl font-semibold text-red-500">Host Dashboard</h1>
      </div>

      {/* Dashboard body */}
      <div
        // style={{ border: "4px solid green" }}
        className="flex flex-col gap-8"
      >
        {/* User name & create-property */}
        <div
          // style={{ border: "3px solid purple" }}
          className="w-full h-[6rem] flex items-center gap-[2rem]"
        >
          <span className=" text-lg font-semibold text-gray-600">
            Welcome,
            <span className=" text-gray-400 font-mono ml-2">
              {current_User?.name}
            </span>
          </span>
          <button
            onClick={() => navigate("/new-property")}
            className="bg-red-500 text-white font-semibold w-[10rem] sm:w-[14rem] p-[8px] sm:p-[12px] rounded-[0.3rem] shadow-lg"
          >
            Create New Property
          </button>
        </div>

        {/* Property tabs */}
        <div className="">
          <HostDashboardTabs />
        </div>
      </div>
    </div>
  );
}

export default HostDashboard