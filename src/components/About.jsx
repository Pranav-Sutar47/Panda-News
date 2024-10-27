import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import newsContext from '../context/NewsContext';

function About() {
  const { toggle } = useContext(newsContext);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration : 2,
        ease: [0.17, 0.67, 0.83, 0.67] ,
        staggerChildren: 1.5,
        staggerDirection: -1,
        delayChildern : 1.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  return (
    <motion.div className='container-fluid mt-[7%] italic'>
      <h1 className={` mt-5 pt-3 text-4xl text-center underline ${toggle == 'light' ? 'text-black' : 'text-white'} font-bold`}>About Us</h1>

      <div className={`p-4 mt-3 text-xl ${toggle==='light'? 'text-black':'text-white'}`}>
        <p className='text-justify'>
        Panda News is your gateway to the latest real-time news from around the world. Our mission is to bring you timely, relevant, and accurate updates spanning global events, technology, health, sports, entertainment, and more—all in one place. Designed to deliver news as it happens, Panda News combines powerful technology with an intuitive interface, ensuring that our readers stay informed with ease.
        </p>
        <br/>
        <h4 className='text-left'>Our team is committed to:</h4>
        <br/>
        <ul style={{listStyleType:'disc'}} className='text-justify'>
          <li>Real-Time Coverage: We source and update stories continually, giving you the freshest news and perspectives.</li>
          <li>
          User-Friendly Experience: With a clean and easy-to-navigate interface, Panda News makes staying informed effortless.
          </li>
          <li>
          Comprehensive Categories: From breaking news to deep-dive features across multiple interests, we offer a broad spectrum of information to cater to varied reader preferences.
          </li>
        </ul>
        <br/>
        <p className='text-center'>Join us as we work to keep you updated with stories that matter, from around the globe.</p>
      </div>
    </motion.div>
  )
}

export default About
