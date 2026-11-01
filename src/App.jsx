import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultModal from './components/ConsultModal';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CustomSoftware from './pages/CustomSoftware';
import EmbeddedSystems from './pages/EmbeddedSystems';
import AiAgentDevelopment from './pages/AiAgentDevelopment';
import ManagedItServices from './pages/ManagedItServices';
import DataAnalytics from './pages/DataAnalytics';
import DigitalMarketing from './pages/DigitalMarketing';
import Products from './pages/Products';
import CaseStudies from './pages/CaseStudies';
import OurTeam from './pages/OurTeam';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Fixed Frosted White Glass Navbar with exact site menu */}
      <Navbar onOpenModal={() => setIsConsultModalOpen(true)} />

      <div className="site-wrapper">
        {/* Multi-Page Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenModal={() => setIsConsultModalOpen(true)} />} />
            <Route path="/about-us" element={<AboutUs onOpenModal={() => setIsConsultModalOpen(true)} />} />
            <Route
              path="/ai-enabled-custom-software-development"
              element={<CustomSoftware onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route
              path="/ai-enabled-embedded-system-design"
              element={<EmbeddedSystems onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route
              path="/ai-agent-development"
              element={<AiAgentDevelopment onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route
              path="/managed-it-services"
              element={<ManagedItServices onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route
              path="/data-analytics"
              element={<DataAnalytics onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route
              path="/digital-marketing"
              element={<DigitalMarketing onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route
              path="/products"
              element={<Products onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route
              path="/case-studies"
              element={<CaseStudies onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route
              path="/our-team"
              element={<OurTeam onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route
              path="/career"
              element={<Career onOpenModal={() => setIsConsultModalOpen(true)} />}
            />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<Home onOpenModal={() => setIsConsultModalOpen(true)} />} />
          </Routes>
        </main>

        {/* Shared Glass Footer */}
        <Footer />

        {/* Interactive Consultation Modal */}
        <ConsultModal
          isOpen={isConsultModalOpen}
          onClose={() => setIsConsultModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
