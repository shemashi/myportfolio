import React from 'react';
import pp from './img/am.jpg'

function About() {
    return ( 

<section id="about" className="about section-bg" >
      <div className="container">

        <div className="section-title" >
          <h2>About</h2>
          <p className='foo' data-aos="fade-in" >I am an energetic and ambitious person who has developed a mature and responsible approach to any task that i undertake. I am a hardcore <strong>programming</strong> and <strong>technology</strong> enthusiast.</p>

        </div>

        <div className="row" >
        <div className="col-lg-4" data-aos="fade-up-right" data-aos-delay="100" data-aos-duration="1000">
            <img src={pp} className="iii"  alt="sdcs" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-up-left" data-aos-delay="100" data-aos-duration="1000">

            <h3>Data  &amp; Software Engineering</h3>
            <h4>INSEA</h4>
            <br />
            <div className="row">
              <div className="col-lg-6"  >
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>09 July 1999</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.chaimaatraoui.me</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+212.7.08.39.49.82</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong><span>Rabat, Morocco</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master’s Degree in Data &amp;  Software Engineering</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>atraoui.chaimaa@gmail.com <br/>catraoui@insea.ac.ma</span></li>
                  
                </ul>
              </div>
              <div className="sss ">
                <a href="https://www.instagram.com/s.h.ai_m/" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/chaimaa-atraoui/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/shemashi" className="linkedin"><i className="bx bxl-github"></i></a>
               
          
            </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>

    );
}

export default About
