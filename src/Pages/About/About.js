import React from 'react';
import { motion } from "framer-motion";


const About = () => {
     return (
         
       
        <motion.div animate={{
          x: 0,
          backgroundColor: "#000",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "fixed",
          transitionEnd: {
            display: "none",
          },
        }}> <h1 className='text-6xl bg-white'>hi</h1></motion.div>
     );
};

export default About;