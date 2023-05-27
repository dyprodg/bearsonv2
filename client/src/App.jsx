/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import logo from './logo.png';
import GrainEffect from './GrainEffect'; // Stelle sicher, dass der Pfad korrekt ist
import simon from './simon.png';
import NavigationBar from "./Navbar";


const FadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const handleButtonClick = () => {
  window.open('https://api.whatsapp.com/send?phone=+4916042069696969', '_blank');
};


const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen" style={{ backgroundColor: '#15180f', color: 'rgba(156, 77, 38, 1)', width: "100vw", position: "relative" }}>
      <NavigationBar />
      <GrainEffect />
      
      <motion.div 
        className="text-4xl text-center my-auto"
        initial="hidden"
        animate="visible"
        variants={FadeInAnimation}
        transition={{ delay: 0.2, duration: 1.5 }}
      >
        <h1 className="my-0">
          BEARSON
        </h1>  
      </motion.div>
        <motion.div className="flex justify-center items-center h-screen">
          <motion.img 
          src={simon} 
          alt="Simon" 
          className="w-72 h-auto mx-auto my-0"
          initial="hidden"
          animate="visible"
          variants={FadeInAnimation}
          transition={{ delay: 0.2, duration: 1.5 }}
          /></motion.div>
      <motion.div 
        className="text-4xl text-center my-auto"
        initial="hidden"
        animate="visible"
        variants={FadeInAnimation}
        transition={{ delay: 0.4, duration: 1.5 }}> 
        <h2 className="my-0">
          TATTOO
        </h2>
      </motion.div>

      <div className="flex justify-between items-end p-4">
        <motion.a
           className="px-4 py-2 bg-transparent rounded"
           initial="hidden"
           animate="visible"
           variants={FadeInAnimation}
           transition={{ delay: 1, duration: 2 }}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
        >
          ©bearsontattoo
        </motion.a>
        
      </div>
    </div>
  );
}

export default LandingPage;


