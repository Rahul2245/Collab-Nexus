import { useParams } from "react-router-dom";
import "./ApplyJob.css";

const ApplyJob = () => {
  const { jobId } = useParams();

  return (
    <div className="apply-wrapper">
      {/* Job Header */}
      <div className="apply-header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
          className="company-logo"
        />

        <div>
          <h2>Frontend Developer</h2>
          <p>Google • Full-time • Remote</p>
        </div>
      </div>

      {/* Form */}
      <form className="apply-form">
        <h3>Application Details</h3>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone</label>
        <input type="tel" placeholder="Enter phone number" required />

         <h3>Resume</h3>
        <label>Upload Resume (PDF only)</label>
        <input type="file" accept=".pdf" required />

        {/* Screening */}
        <h3>Screening Questions</h3>

        <label>Are you available to work full-time?</label>
        <select required>
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <label>Can you work in IST time zone?</label>
        <select required>
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <label>Are you legally eligible to work in India?</label>
        <select required>
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* OA Readiness */}
        <h3>Assessment Readiness</h3>

        <label>Can you attend an online assessment within 48 hours?</label>
        <select required>
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <label>Do you have a stable internet connection?</label>
        <select required>
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* Availability */}
        <h3>Availability</h3>

        <label>Preferred start date</label>
        <input type="date" />

        <label>Preferred interview mode</label>
        <select>
          <option>Online</option>
          <option>Offline</option>
        </select>

        {/* Communication */}
        <h3>Communication Preference</h3>

        <label>Preferred contact method</label>
        <select>
          <option>Email</option>
          <option>WhatsApp</option>
          <option>Phone</option>
        </select>

        <label>Best time to contact</label>
        <select>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>

        {/* Source Tracking */}
        <h3>How did you find this job?</h3>
        <select>
          <option>Connecto Platform</option>
          <option>LinkedIn</option>
          <option>College</option>
          <option>Friend / Referral</option>
        </select>

        {/* Consent */}
        <h3>Declaration</h3>

        <label className="checkbox">
          <input type="checkbox" required />
          I confirm that the information provided is accurate.
        </label>

        <label className="checkbox">
          <input type="checkbox" required />
          I consent to background verification and data processing.
        </label>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
