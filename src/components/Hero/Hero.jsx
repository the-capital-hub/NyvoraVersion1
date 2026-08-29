import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";
export default function Hero() {
  return <section className="hero"><div className="hero-bg-pattern"/><div className="hero-light hero-light-one"/><div className="hero-light hero-light-two"/>
    <div className="hero-main container"><div className="hero-content">
      <motion.div className="hero-kicker" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.65}}><span className="hero-kicker-line"/><span>Professional Legal Services · Bengaluru</span></motion.div>
      <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.15}}>Legal guidance<br/><span>with clarity.</span></motion.h1>
      <motion.p className="hero-description" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.35}}>NEEM LEGAL provides professional legal assistance and documentation services for individuals, families, property owners, businesses and other clients across civil, criminal, property, family, commercial and documentation-related matters.</motion.p>
      <motion.div className="hero-actions" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.5}}><Link to="/consultation" className="hero-primary-btn"><span>Book a Consultation</span></Link><Link to="/practice-areas" className="hero-text-link"><span>Explore Practice Areas</span><span className="hero-link-arrow">→</span></Link></motion.div>
      <motion.div className="hero-meta" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}}><div className="hero-meta-item"><strong>01</strong><span>Civil & Criminal</span></div><div className="hero-meta-item"><strong>02</strong><span>Property & Real Estate</span></div><div className="hero-meta-item"><strong>03</strong><span>Legal Drafting</span></div></motion.div>
    </div>
    <motion.div className="hero-visual" initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{duration:1}}><div className="hero-image"><img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=90" alt="Legal books and documents"/><div className="hero-image-overlay"/><div className="hero-image-top"><span>NEEM LEGAL</span><span>BENGALURU</span></div><div className="hero-image-bottom"><div><span className="hero-image-small">OUR APPROACH</span><h2>Careful<br/><em>legal assistance.</em></h2></div><span className="hero-image-arrow">↗</span></div></div><div className="hero-gold-detail"/></motion.div></div>
  </section>;
}
