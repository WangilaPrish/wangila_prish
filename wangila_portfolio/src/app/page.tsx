import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import React from 'react'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'

const page = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Technologies />
        </div>
    )
}

export default page
