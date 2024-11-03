import './Hero.css'

const Hero = () => {
    return (

        <div className="hero">
            
            <div className="hero-text">
                <h1>Aimaddev</h1>
                <hr className='hr'/>
                <p>Hi, I am Aimad, </p>
                <p>a Frontend Developer focused on creating beautiful and functional </p>
                <p>web applications.</p>
                <hr className='hr'/>
                <a href="#projects" className='hero-btn'>Contact Me</a>
                <div className="social-media">
                    <a href="https://github.com/Aimaddev" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aimaddev/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/Aimaddev" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="hero-img">
                <img src="https://imgs.search.brave.com/XZDSAtshwU5V3ojngsnHTkjob7cv_yUt2g0rV6O4y3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIvTWFu/LVBORy1QaG90b3Mu/cG5n" alt="hero" border="0" />
            </div>
        </div>
    )
}

export default Hero