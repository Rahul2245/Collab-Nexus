import "./ApplicationStatus.css";

const ApplicationStatus = () => {
  return (
    <div className="status-wrapper">
        <div>

      {/* Header */}
      <div className="status-header">
        <h2>Frontend Developer</h2>
        <span className="badge in-progress">In Progress</span>
        <p>Google • Application ID: #A1023</p>
      </div>

      {/* Timeline */}
      <div className="timeline">

        <div className="timeline-item completed">
          <div className="dot" />
          <div>
            <h4>Application Submitted</h4>
            <p>12 Sept 2025</p>
          </div>
        </div>

        <div className="timeline-item active">
          <div className="dot" />
          <div>
            <h4>Online Assessment</h4>
            <p>Scheduled • 60 mins</p>

            {/* OA Redirect */}
            <a
              href="https://www.hackerrank.com/tests/sample-test"
              target="_blank"
              rel="noopener noreferrer"
              className="oa-btn"
            >
              Start OA on HackerRank
            </a>
          </div>
        </div>

        <div className="timeline-item upcoming">
          <div className="dot" />
          <div>
            <h4>Technical Interview</h4>
            <p>Yet to be scheduled</p>
          </div>
        </div>

        <div className="timeline-item upcoming">
          <div className="dot" />
          <div>
            <h4>Final Decision</h4>
            <p>Pending</p>
          </div>
        </div>

      </div>

      {/* Interview Details */}
      <div className="interview-box">
        <h3>Interview Details</h3>
        <p>Mode: Online</p>
        <p>Date: To be announced</p>
        <p>Meeting link will be shared via email</p>
      </div>
      </div>
 <img className="company-image-status"
  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  alt="Google"
  
/>
    </div>
  );
};

export default ApplicationStatus;
