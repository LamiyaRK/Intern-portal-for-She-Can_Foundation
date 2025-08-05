import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import HomeLayout from './assets/Layouts/HomeLayout.jsx';
import Dashboard from './Components/Dashboard.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LeaderBoard from './Components/LeaderBoard.jsx';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true, // this handles /dashboard directly
        element: <Dashboard></Dashboard>
      },
      {
        path: 'leaderboard', // now this becomes /dashboard/leaderboard
        element: <LeaderBoard></LeaderBoard>
      }
    ]
  },
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)
