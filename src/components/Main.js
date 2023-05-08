import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import FavBooks from './FavBooks';

class Main extends Component {

    render() {
        return (
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/favbooks' element={<FavBooks />} />
            </Routes >
        )
    }



}

export default Main;