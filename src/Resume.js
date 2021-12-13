import React from 'react';
import { FaFileDownload } from "react-icons/fa";

function Resume(){
    return(
        <>
        <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="zoom-in-up" data-aos-delay="200">

             <div className='bbb'>

             <br/><br/><br/><br/><br/>
             <br/><br/><br/><br/><br/>

             <br/><a href="https://drive.google.com/file/d/1FXRZ0vtag7rTIKz3WJyLq0C4cLNcVdMk/view?usp=sharing" className="btnn btn-2 btn-2h"> <FaFileDownload size='30'/> &nbsp;Download Resume</a><br/><br/><br/><br/><br/>
                <br/>
                
                
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" >
             <h2>Technical Skills </h2><br/>
            <div className='col-lg-12'>
              <h5 className='ski'>Python</h5>
              <h5 className='ski'>JavaScript</h5>
              <h5 className='ski'>ReactJS</h5>
              <h5 className='ski'>SAS</h5>
              <h5 className='ski'>MongoDB</h5>
              <h5 className='ski'>PostgreSQL</h5>
              <h5 className='ski'>MySQL</h5>
              <h5 className='ski'>Machine Learning</h5>
              <h5 className='ski'>Data Science & Statistics</h5>
              <h5 className='ski'>Android App Development</h5>
              <h2>Tools </h2><br/>
              <h5 className='ski'>Git</h5>
              <h5 className='ski'>Github</h5>
              <h5 className='ski'>Jupyter Notebook</h5>
              <h5 className='ski'>VSCode</h5>
              <h5 className='ski'>AWS</h5>
              <h5 className='ski'>AZURE</h5>
              <h5 className='ski'>Docker</h5>
              <h5 className='ski'>Vim</h5>
              <h2>Python Libraries </h2><br/>
              <h5 className='ski'>Pandas</h5>
              <h5 className='ski'>Numpy</h5>
              <h5 className='ski'>Matplotlib</h5>
              <h5 className='ski'>Tensorflow</h5>
              <h5 className='ski'>Keras</h5>
              <h5 className='ski'>Flask</h5>
              <h5 className='ski'>Django</h5>
              <h5 className='ski'>Chatterbot</h5>
              <h5 className='ski'>RASA</h5>
              <h2>Familiar With</h2><br/>
              <h5 className='ski'>C</h5>
              <h5 className='ski'>Java</h5>
              <h5 className='ski'>Go</h5>
              <h5 className='ski'>R</h5>
              <h5 className='ski'>Lisp</h5>
              <h5 className='ski'>Prolog</h5>
              <h5 className='ski'>UML</h5>
             

          </div>
        </div>
        </div>

     
        <br/>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up-right" data-aos-duration="1500">
            

            <h3 className="resume-title">EDUCATION</h3>
            <div className="resume-item">
              <h3>M.D in Data  &amp; Software Engineering</h3>
              <h5>2019 - 2022</h5>
              <p style={{fontSize:'20px'}}><i>INSEA, Rabat, Morocco</i></p>
              <ul>
                <li>Advanced  theoretical and practical courses in data science ,computer engineering and statistics </li>
              </ul>
              <h3>Preparatory Classes to Engineering Schools</h3>
              <h5>2017 - 2019</h5>
              <p style={{fontSize:'20px'}}><i>Day Prepa, Beni Mellal, Morocco</i></p>
              <ul>
                <li>Advanced courses in Mathematics, Physics, Chemistry, Engineering Sciences and Languages </li>
              </ul>
            </div>
            
            <h3 className="resume-title">EXPERIENCE</h3>

            <div className="resume-item">
              <h3>Data Management & Analytics (INTERNSHIP)</h3>
              <h4>The Ministry of Interior- Wilaya de Beni Mellal-Khénifra<br></br></h4>
              <h5>Summer 2021</h5>
              <p><em>Beni Mellal, Morocco </em></p>
              <ul>
                <li>	Data analytics of cooperatives participating in USAID program .</li>
                <li>	Generating polygon datasets .</li>
                <li>	Data Management of the region with IDinsight</li>
                <li> Assisted in managing and selecting the appropriate cooperatives eligible to INDH conditions.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Web Developer</h3>
              <h4>IADEEP</h4>
              <h5>Aug 2021 – Nov 2021</h5>
              <p><em>Rabat, Morocco</em></p>
              <ul>
              <li>	Built a web application to manage the grades of university students.</li>
              <li>	Tools : Symfony ,HTML, CSS, Javascript, PHP, MySQL.</li> 
                
              </ul>
              
            </div>
          </div>


          <div className="col-lg-6" data-aos="fade-up-left" data-aos-delay="100" data-aos-duration="2000">
           
          

            

           
            

          </div>
        </div>

      </div>
    </section>
        </>
    );

}

export default Resume