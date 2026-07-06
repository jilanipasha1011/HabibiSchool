import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FloatingWidgets from './components/FloatingWidgets';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import Stats from './sections/Stats';
import NewsNotices from './sections/NewsNotices';
import About from './sections/About';
import Messages from './sections/Messages';
import MissionVision from './sections/MissionVision';
import WhyChooseUs from './sections/WhyChooseUs';
import Academics from './sections/Academics';
import Facilities from './sections/Facilities';
import Achievements from './sections/Achievements';
import Gallery from './sections/Gallery';
import VideoTour from './sections/VideoTour';
import AdmissionProcess from './sections/AdmissionProcess';
import FeeInfo from './sections/FeeInfo';
import Events from './sections/Events';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  const [videoTourOpen, setVideoTourOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      
      {/* Premium Sticky Navigation Bar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-grow pt-[73px]">
        
        {/* Full-Screen Campus Hero Banner */}
        <Hero onPlayVideo={() => setVideoTourOpen(true)} />
        
        {/* Animated Statistics Counter */}
        <Stats />
        
        {/* Announcements ticker and notice boards */}
        <NewsNotices />
        
        {/* College introduction detailing academic pillars */}
        <About />
        
        {/* Leadership messages from Principal and Chairman */}
        <Messages />
        
        {/* Mission, Vision, and Core values display */}
        <MissionVision />
        
        {/* Grids outlining key institutional advantages */}
        <WhyChooseUs />
        
        {/* Details of Academic streams (Science, Commerce, Arts) */}
        <Academics />
        
        {/* Smart classes, science/computer laboratories, sports arenas */}
        <Facilities />
        
        {/* Outstanding board exam results and institutional achievements */}
        <Achievements />
        
        {/* Video Tour section with play triggers */}
        <VideoTour 
          isOpenExternally={videoTourOpen} 
          onCloseExternal={() => setVideoTourOpen(false)} 
        />
        
        {/* Photo Gallery with interactive categories filters and lightbox */}
        <Gallery />
        
        {/* Guidelines for admission steps */}
        <AdmissionProcess />
        
        {/* Fee structure tabular guidelines */}
        <FeeInfo />
        
        {/* Upcoming events schedule calendar */}
        <Events />
        
        {/* Feedback reviews from alumni and parents */}
        <Testimonials />
        
        {/* Frequently answered questions accordion */}
        <FAQ />
        
        {/* Admission inquiry forms and GPS address details */}
        <Contact />

      </main>

      {/* Professional educational footer */}
      <Footer />

      {/* Float widgets: Call, WhatsApp, Scroll Progress & Scroll back to top */}
      <FloatingWidgets />

    </div>
  );
}

export default App;
