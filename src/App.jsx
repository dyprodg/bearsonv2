import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import { motion, AnimatePresence } from "framer-motion";
import GrainEffect from './GrainEffect';
import simon from './simon.png';
import NavigationBar from "./Navbar";

const FadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const Home = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAppLoaded(true);
    }, 2000); 
  }, []);

  return (
    <AnimatePresence>
      {!isAppLoaded && <Preloader />}
      {isAppLoaded && (
        <motion.div
          className="flex flex-col h-screen"
          style={{ color: "#9C4D26", width: "100vw", position: "relative" }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={FadeInAnimation}
        >
          <NavigationBar />
          <GrainEffect />

          <motion.div
            className="text-4xl text-center"
            initial="hidden"
            animate="visible"
            variants={FadeInAnimation}
            transition={{ delay: 0.2, duration: 1.5 }}
          >
            <h1 className="my-0">BEARSON</h1>
          </motion.div>

          <motion.div className="flex justify-center items-center h-screen background">
            <motion.img
              src={simon}
              alt="Simon"
              className="w-72 h-auto mx-auto my-0"
              initial="hidden"
              animate="visible"
              variants={FadeInAnimation}
              transition={{ delay: 0.2, duration: 1.5 }}
            />
          </motion.div>

          <motion.div
            className="text-4xl text-center my-auto"
            initial="hidden"
            animate="visible"
            variants={FadeInAnimation}
            transition={{ delay: 0.4, duration: 1.5 }}
          >
            <h2 className="my-0">TATTOO</h2>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
