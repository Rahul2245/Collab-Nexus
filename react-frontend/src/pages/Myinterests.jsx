import { useState } from "react";

import proofile from './../assets/proofile.png'

const DATA = {
  Companies: [
    { id: 1, name: "Google", desc: "Search, Cloud, AI" },
    { id: 2, name: "Polygon", desc: "Blockchain Infrastructure" },
    { id: 3, name: "Zoho", desc: "Enterprise Software" },
  ],
  Projects: [
    { id: 4, name: "Job Portal", desc: "React · Node · MongoDB" },
    { id: 5, name: "DAO Voting App", desc: "Solidity · Web3" },
  ],
  "Open Source": [
    { id: 6, name: "React", desc: "UI Library" },
    { id: 7, name: "Node.js", desc: "Runtime Environment" },
  ],
  Roadmaps: [
    { id: 8, name: "Frontend Roadmap", desc: "HTML → React → System Design" },
    { id: 9, name: "Blockchain Roadmap", desc: "Solidity → Web3 → Audits" },
  ],
  Communities: [
    { id: 10, name: "Web3 Builders", desc: "Collaborate on blockchain projects" },
    { id: 11, name: "Open Source India", desc: "Contribute together" },
  ],
};

export default function Interests() {
  const tabs = Object.keys(DATA);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [followed, setFollowed] = useState([]);

  const toggleFollow = (id) => {
    setFollowed((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="interests-container">
      <h2>Explore Interests</h2>

      {/* Tabs */}
      <div className="interest-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="interest-grid">
        {DATA[activeTab].map((item) => (
          <div
  className={`interest-card ${activeTab.replace(/\s+/g, "").toLowerCase()}`}
  key={item.id}
>
  <div className="interest-inner-card">
       <img
                      src={proofile}
                      alt="profile"
                      className="Company-Logo"
                    />
                    <div>
                      <h4>{item.name}</h4>
            <p>{item.desc}</p>
                    </div>
    
  </div>

            

            <button
              className={`follow-btn ${
                followed.includes(item.id) ? "following" : ""
              }`}
              onClick={() => toggleFollow(item.id)}
            >
              {followed.includes(item.id) ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
