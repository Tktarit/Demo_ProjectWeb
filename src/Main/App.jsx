import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Overview from './Overview';
import Hotel from '../Menu/Hotel';
import Cafe from '../Menu/Cafe';
import Spa from '../Menu/Spa';
import Club from '../Menu/Club';
import ContactUs from '../Menu/ContactUs';
import Booknow from './Booknow';
import XDDSUITES from '../Rooms/XDDSUITES';
import XBB from '../Rooms/XBB';
import GSR from '../Rooms/GSR';
import GSRPLUS from '../Rooms/GSRPLUS';
import SR from '../Rooms/SR';
import SRPLUS from '../Rooms/SRPLUS';
import ScrollToTop from '../ScrollToTop';
import '../style/App.css';
import MenuSwitcher from '../MenuSwitcher';
import Register from './Register';
import Login from './Login';
import Reservation from './Reservation';
import QRCodePage from './QRCodePage';
import Profile from './Profile';
import ReceptionDashboard from './ReceptionDashboard';
import RevenueDashboard from './RevenueDashboard';
import Admin from './Admin';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/Overview" replace />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/club" element={<Club />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/XDDSUITES" element={<XDDSUITES />} />
          <Route path="/XBB" element={<XBB />} />
          <Route path="/GSR" element={<GSR />} />
          <Route path="/GSRPLUS" element={<GSRPLUS />} />
          <Route path="/SR" element={<SR />} />
          <Route path="/SRPLUS" element={<SRPLUS />} />
          <Route path="/Booknow" element={<Booknow />} />
          <Route path="/MenuSwitcher" element={<MenuSwitcher />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Reservation" element={
            <PrivateRoute>
              <Reservation />
            </PrivateRoute>
          } />
          <Route path="/QRCodePage" element={
            <PrivateRoute>
              <QRCodePage />
            </PrivateRoute>
          } />
          <Route path="/Profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/ReceptionDashboard" element={
            <PrivateRoute>
              <ReceptionDashboard />
            </PrivateRoute>
          } />
          <Route path="/RevenueDashboard" element={
            <PrivateRoute>
              <RevenueDashboard />
            </PrivateRoute>
          } />
          <Route path="/Admin" element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;