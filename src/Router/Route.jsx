import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Component/Home/Home';
import About from '../Component/About/About';
import Service from '../Component/Service/Service';
import Contact from '../Component/Contact/Contact';
import { AnimatePresence } from 'framer-motion';

const MainRouter = () => {


    return (


        <Router >

            <AnimatePresence exitBeforeEnter>

                <Routes>

                    <Route path="/" element={< Home />} />

                    <Route path="/About" element={< About />} />

                    <Route path="/Service" element={< Service />} />

                    <Route path="/Contact" element={< Contact />} />

                </Routes>

            </AnimatePresence>

        </Router>

    )
}


export default MainRouter;