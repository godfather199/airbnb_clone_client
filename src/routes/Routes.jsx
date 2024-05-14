import {Nabvar} from '../components'
import {Account, Home, HostDashboard, StripeSuccess, StripeFailure, CreateProperty, PropertyDetails, Whishlist, Trips} from '../pages'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProtectedRoutes from './ProtectedRoutes';
import { GoogleEntry } from '../components/google-oauth/GoogleEntry';


function Routes() {
  const router = createBrowserRouter([
    {
      element: <Nabvar />,
      children: [
        {
          path: "/",
          element: (
            <GoogleEntry>
              <Home />
            </GoogleEntry>
          ),
        },
        {
          path: "/hosting",
          element: (
            <ProtectedRoutes>
              <HostDashboard />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/new-property",
          element: (
            <ProtectedRoutes>
              <CreateProperty />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/property-details/:id",
          element: <PropertyDetails />,
        },
        {
          path: "/whishlist",
          element: (
            <ProtectedRoutes>
              <Whishlist />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/trips",
          element: (
            <ProtectedRoutes>
              <Trips />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/account",
          element: (
            <ProtectedRoutes>
              <Account />
            </ProtectedRoutes>
          ),
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