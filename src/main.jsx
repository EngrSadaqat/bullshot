// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './assets/scss/style.scss';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//
// import Home from './pages/Home';
// import Lordwif from './pages/Lordwif';
// import Finalized from './pages/Finalized';
// import Error from './pages/Error';
//
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <Error />
//   },
//   {
//     path: '/lordwif',
//     element: <Lordwif />,
//     errorElement: <Error />
//   },
//   {
//     path: '/finalized',
//     element: <Finalized />,
//     errorElement: <Error />
//   },
// ]);
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss'; // Import your SCSS styles
import App from './App'; // Import the App class component

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);