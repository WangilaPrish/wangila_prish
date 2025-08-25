import '@/styles/global.css';
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import React from 'react'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Contact from '@/components/Contact'

const page = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Technologies />
            <Contact />
        </div>
    )
}

export default page
