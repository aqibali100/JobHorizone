import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Policy from './screens/Policy';
import Terms from './screens/Terms';
import About from './screens/About';
import Contact from './screens/Contact';
import Login from './components/auth/Login';
import ForgetPassword from './components/auth/ForgetPassword';
import Register from './components/auth/Register';
import ResetPassword from './components/auth/ResetPassword';
import RoleSelection from './screens/RoleSelection';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Jobs from './screens/Jobs';
import Employ from './screens/Employ';
import JobPostForm from './screens/JobPostForm';
import Profile from './screens/Profile';
import NotFound from './screens/NotFound';
import ProtectedRoute from './components/ProtectedRoutes'
import Chat from './screens/Chat';
import ViewJob from './screens/ViewJob';
import Application from './screens/Application';
import ScrollToTop from './components/Scrolltotop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/role-selection/:userId" element={<RoleSelection />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Jobs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route
          path="/employer-dashboard"
          element={
            <ProtectedRoute requiredRole="employer">
              <Employ />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job-post-form"
          element={
            <ProtectedRoute requiredRole="employer">
              <JobPostForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat-dashboard"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-job/:jobId"
          element={
            <ProtectedRoute>
              <ViewJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/application-form/:jobId"
          element={
            <ProtectedRoute>
              <Application />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
