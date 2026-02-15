import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import { AuthProvider } from './store/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import TwoFactorAuth from './pages/Verify';


// Import des pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Hotels from './pages/Hotels';
import Flights from './pages/FlightsPage';
import Tours from './pages/Tours';
import Cabs from './pages/Cabs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import AdminRoute from './route/AdminRoute';
import { ROUTES } from './constants/appConstants';
import HotelReservationPage from './pages/HotelReservationPage';
import HotelsByCity from './pages/HotelsByCity';
import FlightDetails from './pages/FlightDetail';  
import FinalReservation from './pages/FinalReservation';
import ResetPasswordFlow from './pages/ResetPasswordFlow';



import AgentDashboard from './pages/AgentDashboard';
import AgentHotels from './pages/AgentListings';
import Agentvols from './pages/AgentVols';
import AgentSettings from './pages/settingpqge';
import AddListing from './pages/AddListing';
import AddVol from './pages/AddVol';
import EditOffreVol from './pages/EditOffreVol';
import EditHotel from './pages/EditHotel';


function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Routes with MainLayout */}
            <Route path={ROUTES.HOME} element={<MainLayout><Home /></MainLayout>} />
            <Route path={ROUTES.ABOUT} element={<MainLayout><About /></MainLayout>} />
            <Route path={ROUTES.CONTACT} element={<MainLayout><Contact /></MainLayout>} />
            <Route path={ROUTES.HOTELS} element={<MainLayout><Home /></MainLayout>} />
            <Route path={ROUTES.FLIGHTS} element={<MainLayout><Flights /></MainLayout>} />
            <Route path={ROUTES.TOURS} element={<MainLayout><Tours /></MainLayout>} />
            <Route path={ROUTES.CABS} element={<MainLayout><Cabs /></MainLayout>} />
            <Route path={ROUTES.DASHBOARD} element={  <AdminRoute>   <Dashboard /> </AdminRoute> }/>
            <Route path="/hotel/:id" element={<MainLayout> <HotelReservationPage /></MainLayout>} />
            <Route path="/hotels/:city" element={<MainLayout><HotelsByCity /></MainLayout>} />
            <Route path="/flight-details/:id" element={<MainLayout><FlightDetails /></MainLayout>} />
            <Route path="/reservation/final" element={<MainLayout><FinalReservation /></MainLayout>} />
            <Route path="/verify" element={<TwoFactorAuth />} />


             <Route path="/agent/dashboard" element={<MainLayout><AgentDashboard /></MainLayout>} />
            <Route path="/agent/listings" element={<MainLayout><AgentHotels /></MainLayout>} />
            <Route path="/agent/add-listing" element={<MainLayout><AddListing /></MainLayout>} />
            <Route path="/agent/vols" element={<MainLayout><Agentvols /></MainLayout>} />
            <Route path="/settings" element={<MainLayout><AgentSettings /></MainLayout>} />
            <Route path="/agent/add-vol" element={<MainLayout><AddVol /></MainLayout>} />
            <Route path="/agent/vols/:id/edit" element={<MainLayout><EditOffreVol /></MainLayout>} /> 
            <Route path="/agent/hotels/:id/edit" element={<MainLayout><EditHotel /></MainLayout>} />
            <Route path="/reset-password" element={<ResetPasswordFlow />} />
            
            {/* Routes with AuthLayout (no header/footer) */}
            <Route path={ROUTES.SIGN_IN} element={<AuthLayout><SignIn /></AuthLayout>} />
            <Route path={ROUTES.SIGN_UP} element={<AuthLayout><SignUp /></AuthLayout>} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;