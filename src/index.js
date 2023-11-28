import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './App/store';
import Landing from './Landing/Landing';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login/Login';
import Daftar from './Daftar/Daftar';
import Sidebar from './Sidebar/Sidebar';
import Program from './Program/Program';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Landing",
    element: <Landing />
  },
  {
    path: "Login",
    element: <Login />
  },
  {
    path: "Daftar",
    element: <Daftar />
  },
  {
    path: "Kelas",
    element: <Sidebar />
  },
  {
    path: "Program",
    element: <Program />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
