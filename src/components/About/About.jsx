import './About.css';
const About = () => {
  return (
    <section className="about" >
      <div className='about-container'>
        <h2 >About Me</h2>
        <hr className='hr-about'/>
        <p >
          Hello! Im <span >Your Name</span>, a passionate developer specialized in building
          beautiful and functional web applications. With a background in
          Your Background, e.g., Computer Science and hands-on experience
          in <span >React, Redux, and Node.js</span>,
          I enjoy tackling complex problems and delivering user-friendly
          solutions.
        </p>
        <hr className='hr-about'/>
        <h3>Core Skills</h3>
        <div className='core-skills'>
          <span >React</span>
          <span >Redux</span>
          <span >Node.js</span>
          <span >MongoDB</span>
          <span >JavaScript</span>
          <span >CSS / Tailwind CSS</span>
        </div>

        <div className='resume-btn'>
            <p>Want to know more about me?</p>
          <a
            href="/resume.pdf" // Replace with the actual link to your resume
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
