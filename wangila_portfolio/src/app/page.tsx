import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import '@/styles/global.css';

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
