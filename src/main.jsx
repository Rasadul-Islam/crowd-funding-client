import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import AddCampains from './components/AddCampaigns/AddCampains.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import MyCampaign from './components/MyCampaign/MyCampaign.jsx';
import MyDonation from './components/MyDonation/MyDonation.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import Register from './components/Register/Register.jsx';
import CampaignCardDitails from './components/CampaignCardDitails/CampaignCardDitails.jsx';
import AllCampaingns from './components/AllCampaigns/AllCampaingns.jsx';
import AddCampains from './components/AddCampaigns/AddFund.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import UpdateFund from './components/UpdateFund/UpdateFund.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/campaign'),
      },
      {
        path: "/campaigns",
        element: <AllCampaingns></AllCampaingns>,
        loader: () => fetch('http://localhost:5000/all-campaign'),
      },
      {
        path: "/campaign/new",
        element: (
          <PrivateRoute>
            <AddCampains></AddCampains>
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/my/:email",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
        loader: ({params})=>
          fetch(`http://localhost:5000/campaign/my/${params.email}`)
      },
      {
        path: "/donations/my",
        element: <MyDonation></MyDonation>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/card/ditails/:id",
        element: (
          <PrivateRoute>
            <CampaignCardDitails></CampaignCardDitails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaign/${params.id}`),
      },
      {
        path: "/campaign/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFund></UpdateFund>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaign/update/${params.id}`),
      },

    ]

  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
