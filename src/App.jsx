import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WorkFromHome from "./pages/WorkFromHome";
import FresherJobs from "./pages/FresherJobs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import JobDetails from "./pages/JobDetails";

const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work-from-home-jobs" element={<WorkFromHome />} />
        <Route path="/fresher-jobs" element={<FresherJobs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/job-details" element={<JobDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
