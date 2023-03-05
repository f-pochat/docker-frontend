import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Toaster} from 'sonner'
import AuthRouter from "./common/AuthRouter";

const router = createBrowserRouter([
    {
        path: "home",
        element: <AuthRouter><Home/></AuthRouter>,
    },
    {
      path: "login",
      element: <Login />
    },
    {
        path: "sign-up",
        element: <SignUp />
    }]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Toaster position="bottom-center" />
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
