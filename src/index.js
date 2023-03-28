import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/auth/Login';
import SignUp from './views/auth/SignUp';
import Dashboard from './views/pages/Dashboard';
import ProductsDetails from './components/ProductsDetails';
import EditUserProfile from './views/pages/EditUserProfile';
import { ChangePassword } from './views/auth/ChangePassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='SignUp' element={<SignUp />}></Route>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='dashboard/viewproduct' element={<ProductsDetails />}></Route>
          <Route path='dashboard/editprofile' element={<EditUserProfile />}></Route>
          <Route path='dashboard/editprofile/changepassword' element={<ChangePassword />}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
