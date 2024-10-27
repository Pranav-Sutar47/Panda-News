import React from 'react'
import ViewNews from './ViewNews'
import News from './News'
import About from './About'
import {Route, Routes, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
            <Route path='/' element={<News cat={'general'} />}/>
            <Route path='/business' element={<News cat={'business'} />}/>
            <Route path='/entertainment' element={<News cat={'entertainment'} />}/>
            <Route path='/health' element={<News cat={'health'} />}/>
            <Route path='/science' element={<News cat={'science'} />}/>
            <Route path='/sports' element={<News cat={'sports'} />}/>
            <Route path='/technology' element={<News cat={'technology'} />}/>
            <Route path='/about' element={<About/>} />
            <Route path='/news' element={<ViewNews/>}/>
    </Routes>
    </AnimatePresence>
  )
}
