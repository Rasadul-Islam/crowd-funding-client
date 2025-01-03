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
        loader: () => fetch('http://localhost:5000/campaign'),
      },
      {
        path: "/campaign/new",
        element: <AddCampains></AddCampains>,
      },
      {
        path: "/campaign/my",
        element: <MyCampaign></MyCampaign>,
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
        element: <CampaignCardDitails></CampaignCardDitails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaign/${params.id}`),
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
