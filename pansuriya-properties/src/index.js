import React from 'react';
import {FaArrowUp} from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,faFacebook,faTwitter,faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import ReactDOM from 'react-dom/client';
import '../src/Component/index.css';
import '../src/Component/logincss.css';
import TermsAndConditions from './Component/TermsAndConditions';
import PrivacyPolicy from './Component/PrivacyPolicy';
import Home from './Component/Home';
import About from './Component/About'
import Contact from './Component/Contact';
import Property from './Component/Property';
import Pages from './Component/Pages';
import './bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import propertyType from './Component/PropertyTypes';
import LoginPage from './Component/LoginPage';
import RegisterPage from './Component/RegisterPage';
import AddProperty from './Component/AddProperty';
import AdminDashboard from './Component/AdminDashboard';
import AdminLogin from './Component/AdminLogin';
import PropertyData from './Component/PropertyData';
import ContactData from './Component/ContactData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' Component={LoginPage} ></Route>
        <Route path='/ContactData'Component={ContactData}></Route>
        <Route path='/Admindashboard' Component={AdminDashboard} ></Route>
        <Route path='/AdminLogin' Component={AdminLogin} ></Route>
        <Route path='/PropertyData' Component={PropertyData} ></Route>
        <Route path='/HomePage' Component={Home} ></Route>
        <Route path='/About' Component={About} ></Route>
        <Route path='/Contact' Component={Contact} ></Route>
        <Route path='/Property' Component={Property} ></Route>
        <Route path='/AddProperty' Component={AddProperty} ></Route>
        <Route path='/RegisterPage' Component={RegisterPage} ></Route>
        <Route path='/Pages' Component={Pages} ></Route>
        <Route path='/PropertyType' Component={propertyType} ></Route>
        <Route path='/PrivacyPolicy' Component={PrivacyPolicy} ></Route>
        <Route path='/TermsAndConditions' Component={TermsAndConditions} ></Route>
        <Route path='/Pages/Testemonial' Component={Pages} ></Route>
    </Routes>
    </BrowserRouter>
    </>
);
