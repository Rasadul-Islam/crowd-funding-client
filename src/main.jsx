import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddFund from './components/AddFund/AddFund.jsx';
import UpdateFund from './components/UpdateFund/UpdateFund.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import MyCampaign from './components/MyCampaign/MyCampaign.jsx';
import MyDonation from './components/MyDonation/MyDonation.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import Register from './components/Register/Register.jsx';
import CampaignCardDitails from './components/CampaignCardDitails/CampaignCardDitails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/campaign'),
      },
      {
        path: "/campaigns",
        element: <UpdateFund></UpdateFund>,
      },
      {
        path: "/campaign/new",
        element: <AddFund></AddFund>, 
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
    <RouterProvider router={router} />
  </StrictMode>,
)
