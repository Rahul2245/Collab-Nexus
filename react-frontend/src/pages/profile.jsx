// import "./profile.css";

import proofile from './../assets/proofile.png'

export default function Profile() {
  return (
    <div className="profile-container">
      
      {/* Header */}
      <div className="profile-header">
        <img
          src={proofile}
          alt="proofile"
          className="profile-image"
        />

        <div>
          <h1 className="profile-name">Rahul Gajula</h1>
          <p className="profile-role">FULL stack Developer | 2⭐ @codechef | JavaScript | DSA enthusiasist | Blockchain enthusiasist</p>
           <p className="profile-role">Hyderabad,Telanagana</p>
           <div className="Profile-buttons">
              <button className="edit-btn">Edit Profile</button>
              <button className="edit-btn">Upgrade</button>
           </div>
        
        </div>
      </div>

      {/* About */}
      <div className="section">
        <h2 className="section-title">About</h2>
        <p className="section-text">
          Passionate developer who loves building web apps and exploring new
          technologies.
        </p>
      </div>
      <div className="profile-links">
  
  <div className="link-card resume">
    <h3>📄 Resume</h3>
    <a href="YOUR_RESUME_LINK" target="_blank">View Resume</a>
  </div>

  <div className="link-card github">
    <h3>🐙 GitHub</h3>
    <a href="YOUR_GITHUB_LINK" target="_blank">Open GitHub</a>
  </div>

  <div className="link-card linkedin">
    <h3>🔗 LinkedIn</h3>
    <a href="YOUR_LINKEDIN_LINK" target="_blank">Visit Profile</a>
  </div>

  <div className="link-card leetcode">
    <h3>🧩 LeetCode</h3>
    <a href="YOUR_LEETCODE_LINK" target="_blank">View Stats</a>
  </div>

  <div className="link-card portfolio">
    <h3>🌐 Portfolio</h3>
    <a href="YOUR_PORTFOLIO_LINK" target="_blank">Open Website</a>
  </div>

</div>


     {/* Education */}
<div className="section">
  <h2 className="section-title">Education</h2>

  <div className="education-card">
      <img
      src={proofile}
      alt="profile"
      className="Company-Logo"
    />
    <div>
          <p className="edu-college">Atal Bihari Vajpayee Indian Institute of Technology & Management, Gwalior</p>
    <p className="edu-degree">Bachelor of Technology in Computer Science</p>

    </div>
    

  </div>

  <div className="education-card">
      <img
      src={proofile}
      alt="profile"
      className="Company-Logo"
    />
    <div>
      <p className="edu-college">Sri Chaitanya Junior College, Hyderabad</p>
    <p className="edu-degree">Intermediate (MPC)</p>
    </div>
    
  </div>

  <div className="education-card">
      <img
      src={proofile}
      alt="profile"
      className="Company-Logo"
    />

    <div>
      <p className="edu-college">Gowtham model School</p>
    <p className="edu-degree">Schooling (Class 1–10)</p>
    </div>
    
  </div>
</div>



      {/* Skills */}
      {/* <div className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-box">
          <span className="skill-tag">React</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">UI/UX</span>
        </div>
      </div> */}
      <div className="skills-card">
  <h3 className="skills-title">Skills</h3>

  <div className="skills-section">
    <h4>Languages</h4>
    <div className="skills-list">
      <span>Java</span>
      <span>JavaScript</span>
      <span>TypeScript</span>
      <span>C++</span>
    </div>
  </div>

  <div className="skills-section">
    <h4>Frontend</h4>
    <div className="skills-list">
      <span>React</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>Tailwind CSS</span>
    </div>
  </div>

  <div className="skills-section">
    <h4>Backend</h4>
    <div className="skills-list">
      <span>Node.js</span>
      <span>Express.js</span>
      <span>REST APIs</span>
    </div>
  </div>

  <div className="skills-section">
    <h4>Database</h4>
    <div className="skills-list">
      <span>MongoDB</span>
      <span>MySQL</span>
    </div>
  </div>

  <div className="skills-section">
    <h4>Tools & Others</h4>
    <div className="skills-list">
      <span>Git</span>
      <span>Postman</span>
      <span>Linux</span>
      <span>Figma</span>
    </div>
  </div>
</div>

      {/* Working Experience */}
      <div className="section">
        <h2 className="section-title">Professional Experience </h2>
        <div className='Experience-card'>
          <img
      src={proofile}
      alt="profile"
      className="Company-Logo"
    />

           <div >
          <h3>Accenture</h3>
          <p>Web Developer</p>
        </div>

        </div>

           <div className='Experience-card'>
          <img
      src={proofile}
      alt="profile"
      className="Company-Logo"
    />

           <div >
           <h3>JP-Morgan</h3>
          <p>Spring-Boot Developer</p>
        </div>

        </div>

       

      </div>


      {/* Projects */}
      <div className="section">
        <h2 className="section-title">Projects</h2>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built with React.</p>
          <div className='certificate-asso'>
         <img
      src={proofile}
      alt="profile"
      className="associate-image"
    />
    <div className='associate-heading'>Associated with Atal Bihari Vajpayee Indian Institute of Technology & Management, Gwalior</div>

      </div>
       <div className='project-media-heading'>
        media
        <div className='project-media'>
          <img
      src={proofile}
      alt="profile"
      className="project-media-image"
    />
    <img
      src={proofile}
      alt="profile"
      className="project-media-image"
    />

        </div>
      </div>
          
        </div>

        <div className="project-card">
          <h3>Chat App</h3>
          <p>Real-time chat app using Node.js and Socket.io.</p>
          <div className='certificate-asso'>
         <img
      src={proofile}
      alt="profile"
      className="associate-image"
    />
    <div className='associate-heading'>Associated with Atal Bihari Vajpayee Indian Institute of Technology & Management, Gwalior</div>

      </div>
      <div className='project-media-heading'>
        media
        <div className='project-media'>
          <img
      src={proofile}
      alt="profile"
      className="project-media-image"
    />
    <img
      src={proofile}
      alt="profile"
      className="project-media-image"
    />

        </div>
      </div>
        </div>

      </div>
      {/* Certificates */}
<div className="section">
  <h2 className="section-title">Certifications</h2>

  <div className="certificate-card">
    <img
      src={proofile}
      alt="profile"
      className="profile-image"
    />

    <div className="certificate-info">
      <div className="certificate-heading">Blockchain Basics</div>
      <div className='certificate-details'>Introduction to blockchain fundamentals</div>
      <div className='certificate-asso'>
         <img
      src={proofile}
      alt="profile"
      className="associate-image"
    />
    <div className='associate-heading'>Associated with Atal Bihari Vajpayee Indian Institute of Technology & Management, Gwalior</div>

      </div>
      <div><a
    href="https://your-credential-link.com"
    className="credential-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Credential
  </a></div>
      
    </div>
      
   
  </div>

  <div className="certificate-card">
    <img
      src={proofile}
      alt="profile"
      className="profile-image"
    />

    <div className="certificate-info">
      <div className="certificate-heading">Web-Development Certificate</div>
      <div className='certificate-details'>Description of the certificate</div>
      <div className='certificate-asso'>
         <img
      src={proofile}
      alt="profile"
      className="associate-image"
    />
    <div className='associate-heading'>Associated with Atal Bihari Vajpayee Indian Institute of Technology & Management, Gwalior</div>

      </div>
      <div><a
    href="https://your-credential-link.com"
    className="credential-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Credential
  </a></div>
      
    </div>
  </div>
   </div>
   <div className="section">
        <h2 className="section-title">Achievements </h2>

        <div className="achievement-card">
  <div className="badge">🏆</div>
  <div className="ach-info">
    <h3>Top Performer Award</h3>
    <p>Recognized for outstanding project execution in 2024.</p>
  </div>
</div>


      </div>
</div>


    
  );
}
