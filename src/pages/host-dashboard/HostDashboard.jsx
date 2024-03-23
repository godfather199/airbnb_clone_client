import { Link } from 'react-router-dom'
import {CreateProperty, HostDashboardTabs} from '../'


function HostDashboard() {
  return (
    <div className="">
      <div className="">
        <h1 className="">Host Dashboard</h1>
      </div>

      {/* Dashboard body */}
      <div className="">
        {/* User name & create-property */}
        <div className="">
          <span className="">Welcome, user</span>
          <Link to = '/new-property'>
            Create New Property
          </Link>
        </div>

        {/* Property tabs */}
        <div className="">
          <HostDashboardTabs />
        </div>
      </div>
    </div>
  )
}

export default HostDashboard