import { useState } from "react";

import proofile from './../assets/proofile.png'

export default function Jobs() {
const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google", type: "Full-time", mode: "Remote" },
  { id: 2, title: "Backend Intern", company: "Amazon", type: "Internship", mode: "On-site" },
  { id: 3, title: "Blockchain Developer", company: "Startup X", type: "Freelance", mode: "Remote" },
  { id: 4, title: "Java Developer", company: "Infosys", type: "Contract", mode: "Hybrid" },
  { id: 5, title: "UI Developer", company: "Zoho", type: "Part-time", mode: "Remote" },

  { id: 6, title: "Full Stack Developer", company: "Microsoft", type: "Full-time", mode: "Hybrid" },
  { id: 7, title: "React Intern", company: "Flipkart", type: "Internship", mode: "Remote" },
  { id: 8, title: "Node.js Developer", company: "TCS", type: "Contract", mode: "On-site" },
  { id: 9, title: "Web Designer", company: "Freshworks", type: "Part-time", mode: "Remote" },
  { id: 10, title: "Solidity Developer", company: "Web3 Labs", type: "Freelance", mode: "Remote" },

  { id: 11, title: "DevOps Engineer", company: "AWS", type: "Full-time", mode: "On-site" },
  { id: 12, title: "Java Intern", company: "Wipro", type: "Internship", mode: "Hybrid" },
  { id: 13, title: "Mobile App Developer", company: "Swiggy", type: "Contract", mode: "Remote" },
  { id: 14, title: "UI/UX Designer", company: "Zomato", type: "Part-time", mode: "Hybrid" },
  { id: 15, title: "Smart Contract Auditor", company: "ChainSafe", type: "Freelance", mode: "Remote" },

  { id: 16, title: "Software Engineer", company: "Adobe", type: "Full-time", mode: "Hybrid" },
  { id: 17, title: "Data Analyst Intern", company: "Paytm", type: "Internship", mode: "On-site" },
  { id: 18, title: "Python Developer", company: "Accenture", type: "Contract", mode: "Remote" },
  { id: 19, title: "Frontend Tester", company: "Capgemini", type: "Part-time", mode: "On-site" },
  { id: 20, title: "Crypto Researcher", company: "DAO Labs", type: "Freelance", mode: "Remote" },
];


  const jobTypes = ["All", "Full-time", "Part-time", "Internship", "Freelance", "Contract"];

  const [activeType, setActiveType] = useState("All");
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchType = activeType === "All" || job.type === activeType;
    const matchMode = mode === "All" || job.mode === mode;
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    return matchType && matchMode && matchSearch;
  });

  return (
   <div className="jobs-container">
      <h2>Jobs</h2>

  
    <div className="job-type-bar">
        {jobTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
      </div>

   
     
<div className="job-filters">
        <input
          type="text"
          placeholder="Search by role or company"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="All">All Modes</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

   <div className="job-list">
      
        {filteredJobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          filteredJobs.map((job) => (
          <div className={`job-card ${job.type.toLowerCase().replace('-', '')} ${job.mode.toLowerCase().replace('-', '')}`}>
             <div className='job-inner-card'>
                      <img
                  src={proofile}
                  alt="profile"
                  className="Company-Logo"
                />

            <div key={job.id}>
              <h4>{job.title}</h4>
              <p>{job.company}</p>
              <span>{job.type}</span> | <span>{job.mode}</span>
              </div>
            </div>
             </div>

          ))
        )}
      
      </div>
    </div>
  );
}
