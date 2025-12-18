import { useParams, useNavigate } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="job-details-container">
      {/* Header */}
      <div className="job-header">
        <h1>Frontend Developer</h1>
        <div className="company">
             
           <img className="company-image"
  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  alt="Google"
  
/>
<p >Google</p>



        </div>
       
        <span className="tag">Full-time</span>
        <span className="tag">Remote</span>
      </div>

      {/* Description */}
      <section>
        <h3>Job Description</h3>
        <p>
          We are looking for a Frontend Developer who is passionate about building
          scalable web applications.
        </p>
      </section>

      {/* Responsibilities */}
      <section>
        <h3>Responsibilities</h3>
        <ul>
          <li>Build reusable UI components</li>
          <li>Optimize applications for speed</li>
          <li>Collaborate with backend teams</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section>
        <h3>Eligibility</h3>
        <ul>
          <li>Strong knowledge of React</li>
          <li>0–2 years experience</li>
          <li>CS / IT background preferred</li>
        </ul>
      </section>

      {/* Apply */}
      <button
        className="apply-btn"
        onClick={() => navigate(`/jobs/ApplyJob`)}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
