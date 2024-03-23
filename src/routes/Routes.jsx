import {Nabvar} from '../components'
import {Home, HostDashboard, StripeSuccess, StripeFailure, CreateProperty, PropertyDetails, Whishlist, Trips} from '../pages'
import { RouterProvider, createBrowserRouter } from "react-router-dom"


function Routes() {
  const router = createBrowserRouter([
    {
      element: <Nabvar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/hosting",
          element: <HostDashboard />,
        },
        {
          path: "/new-property",
          element: <CreateProperty />,
        },
        {
          path: "/property-details/:id",
          element: <PropertyDetails />,
        },
        {
          path: "/whishlist",
          element: <Whishlist />,
        },
        {
          path: "/trips",
          element: <Trips />,
        },
        {
          path: "/success",
          element: <StripeSuccess />,
        },
        {
          path: "/cancel",
          element: <StripeFailure />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Routes