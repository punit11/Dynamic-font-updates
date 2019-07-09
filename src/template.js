import React from 'react';

function MyTemplate() {
    return (
    <div>
    <article className="l-Wrapper">
    <div className="l-Header">
      <div className="l-Header-col">
        <a href="#" target="_blank">
          <h1 className="Title sans">
            <span className="u-shadow">
              Virat Kohli
            </span>
            <span className="Title-sub">Senior UI developer</span>
          </h1>
        </a>
      </div>
      <div className="l-Header-col Contact mono">
        <div>Melbourne, AU</div>
        <div><a className="u-link" href="#" target="_blank">https://github.com/</a></div>
        <div><a className="u-link" href="mailto:virat.kohli@gmail.com" target="_blank">virat.kohli@gmail.com</a></div>
      </div>
    </div>
  
    <section className="l-Section">
      <h2 className="l-Section-title h3 u-hidden@sm-down serif">Profile</h2>
      <div className="l-Section-content sans">
        <p>I specialize in component based HTML/CSS architecture, with a focus on maintainability and scalability, a mobile first approach.</p>
      </div>
    </section>
  
    <section className="l-Section">
      <h2 className="l-Section-title h3 serif">Skills</h2>
      <div className="l-Section-content sans">
        <ul>
          <li>Highly skilled in creating performant <strong className="Tag">HTML</strong>, <strong className="Tag">CSS</strong></li>
          <li>Passionate about <strong className="Tag">CSS Methodologies</strong> and <strong className="Tag">CSS Preprocessors</strong></li>
          <li>Skilled in creating <strong className="Tag">Component Libraries</strong>, <strong className="Tag">Prototypes</strong> and <strong className="Tag">Style Guides</strong></li>
          <li>Experienced with <strong className="Tag">Templating Languages</strong> and <strong className="Tag">JavaScript</strong></li>
          <li>Proficient with <strong className="Tag">Task Runners</strong> and <strong className="Tag">Package Managers</strong> and <strong className="Tag">Version Control Systems</strong></li>
          <li>Knowledgeable about <strong className="Tag">User Experience</strong>, <strong className="Tag">Accessibility</strong>, <strong className="Tag">Performance</strong>, <strong className="Tag">Responsive Web Development</strong> with a <strong className="Tag">Mobile First</strong>          approach, <strong className="Tag">Cross-Browser Compatibilities</strong> and <strong className="Tag">Progressive Enhancement</strong>.</li>
        </ul>
      </div>
    </section>
  
    <section className="l-Section">
      <h2 className="l-Section-title h3 serif">Experience</h2>
      <div className="l-Section-content sans">
        <h3>Freelance Front-end Developer</h3>
        <a className="u-link" href="#" target="_blank">Self-employed, Chandigarh</a> (India)<br/> May 2017 - present
  
        <h3>Front-end Developer</h3>
        <a className="u-link" href="#" target="_blank">Snap Fashion, Melbourne</a> (AU)<br/> May 2014 - Jul 2016
        <ul>
          <li>Re-architected CSS/HTML codebase of the responsive Snap Fashion website for better maintainability and performance.</li>
          <li>Introduced Grunt, Bower and npm to automate common tasks, optimize frontend assets and manage third party packages.</li>
          <li>Created and maintained a style guide to use as a reference for our design language.</li>
          <li>Delivered front-end work for various external and internal projects to the backend team.</li>
          <li>Built a JavaScript widget for integration of product feeds on third party websites using the Snap Fashion API.</li>
          <li>Developed prototypes including a Chrome extension and browser bookmarklet.</li>
          <li>Offered guidance and support to the design team, advising on core web design principles, best practice and work flow.
          </li>
        </ul>
  
        <h3>Web Design & Interface Specialist</h3>
        <a className="u-link" href="#" target="_blank">Melbourne, Victoria</a> (AU)<br/> Jun 2010 - May 2014
        <ul>
          <li>Working within a team of 16+ I’ve established myself as a front-end developer with a strong focus on web standards, semantics, accessibility and progressive enhancement (HTML/CSS).</li>
          <li>Designed and/or built Wordpress themes as well as Shopify themes from scratch or customized them depending on the client’s needs.</li>
          <li>Headed the design team and designed simple and clean user interfaces.
          </li>
        </ul>
  
        <h3>Web Specialist</h3>
        <a className="u-link" href="#" target="_blank">Melbourne, Victoria</a> (AU)<br/> Oct 2009 - Jun 2010
        <ul>
          <li>Designed client websites and features as well as customized social media channels to improve their online presence.</li>
          <li>Content management, including image processing for the web.</li>
          <li>Built HTML newsletters and managed the distribution through the in house newsletter management system.</li>
          <li>Assisted the development team with HTML and CSS updates
          </li>
        </ul>
      </div>
    </section>
  
    <section className="l-Section">
      <h2 className="l-Section-title h3 serif">Education</h2>
      <div className="l-Section-content sans">
        <h3>BSc, Media technology and design</h3>
        <a className="u-link" href="#" target="_blank">University of Applied Sciences, Melbourne Campus</a> (AU)<br/> 2006 - 2009
        <p>A full-time degree programme that provides the technical expertise as well as the design and communication skills in areas including web (backend and frontend development), multimedia, 3D modelling, animation, audio & video production.</p>
      </div>
    </section>
  
    <section className="l-Section u-hidden@print">
      <h2 className="l-Section-title h3 serif">Interests</h2>
      <div className="l-Section-content sans">
        <p>User Experience, Accessibility, Web Standards, Automatization, Technology, Simplicity, Snowboarding, Bouldering, Coffee, Food, Art, Music, Movies, Traveling, Plants</p>
      </div>
    </section>
  </article>
  
  <div className="l-Wrapper u-keyline">
    <div className="l-Footer">
      <div className="l-Footer-col">
        <strong className="Tag">V. Kohli</strong>
      </div>
      <div className="l-Footer-col Contact mono">
        <a href="#" target="_blank">viratkohli.com</a>
        <a href="mailto:virat.kohli@gmail.com" target="_blank">virat.kohli@gmail.com</a>
      </div>
    </div>
  </div>
  </div>
    )
}
export default MyTemplate;