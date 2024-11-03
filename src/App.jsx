import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

const App = () => {
    
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
        </div>
    )
}

export default App