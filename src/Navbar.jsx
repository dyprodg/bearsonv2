// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { CSSTransition } from 'react-transition-group';
import './App.css'; // Stelle sicher, dass du die CSS-Datei importierst
import logo from './logo.png';
import { motion } from "framer-motion";

const FadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
function NavigationBar() {
    const navRef = useRef();
    const [isBarVisible, setIsBarVisible] = useState(true);

    const showNavbar = (type) => {
        navRef.current.classList.toggle("responsive_nav");

        if (type === 'bars') {
            setIsBarVisible(false);
        } else if (type === 'times') {
            setIsBarVisible(true);
        }
    }

    
    return ( 
        <header>
            <div>
            <motion.img
                src={logo}
                alt="Logo"
                className="logo"
                initial="hidden"
                animate="visible"
                variants={FadeInAnimation}
                transition={{ delay: 1, duration: 2 }}/>

            </div>
            <motion.nav ref={navRef}
             initial="hidden"
             animate="visible"
             variants={FadeInAnimation}
             transition={{ delay: 1, duration: 2 }}>
                <button onClick={() => showNavbar('times')}>
                    <FaTimes/>
                </button>
                <a href="/#">Home</a>
                <a href="/#">Galerie</a>
                <a href="/#">Kontakt</a>
                <a href="/#">Impressum</a>
            </motion.nav>
            <CSSTransition
                in={isBarVisible}
                timeout={300}
                classNames="fly"
                unmountOnExit
            >
                <button onClick={() => showNavbar('bars')}>
                    <FaBars />
                </button>
            </CSSTransition>
        </header>
    );
}
export default NavigationBar;
