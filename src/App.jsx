import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import PracticeAreaDetails from "./pages/PracticeAreaDetails/PracticeAreaDetails";
import Attorneys from "./pages/Attorneys/Attorneys";
import AttorneyProfile from "./pages/AttorneyProfile/AttorneyProfile";
import CaseResults from "./pages/CaseResults/CaseResults";
import Insights from "./pages/Insights/Insights";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Consultation from "./pages/Consultation/Consultation";
import LegalChatbot from "./components/LegalChatbot/LegalChatbot";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { div } from "framer-motion/client";

function ScrollProgress(){return <div className="scroll-progress" aria-hidden="true"/>}

export default function App() {
  return (
    <div style={{textDecoration:"none"}}>

    
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
  
        
        <Route path="/practice-areas/:slug" element={<PracticeAreaDetails />} />
        <Route path="/attorneys" element={<Attorneys />} />
        <Route path="/attorneys/:id" element={<AttorneyProfile />} />
        <Route path="/case-results" element={<CaseResults />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<ArticleDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
      <Footer />
      <LegalChatbot />
    </BrowserRouter>
    </div>
  );
}
