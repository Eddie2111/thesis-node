import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { BrowserRouter,Route,Routes } from "react-router-dom";

// routes and pages
import Signup       from "./pages/signup";
import Login        from "./pages/login";
import Success      from "./pages/success";
import Home         from "./pages/home";
import RecordedData from "./pages/recordeddata";
import NotFound     from "./pages/notFound";
import Docs         from "./pages/docs";
import Test         from './pages/Test';
// routes and pages

//import localStorage from "localstorage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/"            element={<App />} />
      <Route path="signup"       element={<Signup />} />
      <Route path="login"        element={<Login />} />
      <Route path="success"      element={<Success />} />
      <Route path="recordeddata" element={<RecordedData />} />
      <Route path="home"         element={<Home />} />
      <Route path="Test"         element={<Test />} />
      <Route path="docs"         element={<Docs />} />
      <Route path="*"            element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

