import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import Login from './Login/Login.tsx'
import SignUp from './SignUp/SignUp.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([

  {path: "/",element: <Home />},
  {path: "/login",element: <Login />},
  {path: "/signup",element: <SignUp />},

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
