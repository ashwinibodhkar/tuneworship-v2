import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Index from "./pages/App";
import Song from "./pages/song";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/song",
    element: <Song />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <RouterProvider router={router} />
   


  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
