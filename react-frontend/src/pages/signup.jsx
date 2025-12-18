export default function signup(){
    return (
    <div className="signupcard">
        Signup into NEW account
      <div className="input-box">
      <input type="text" placeholder="Email" />
    </div>
    <div className="input-box">
      <input type="text" placeholder="Enter Passcode" />
    </div>
      <div className="input-box">
      <input type="text" placeholder="Propose PhoneNumber" />
    </div>
      <div className="input-box">
      <input type="text" placeholder="Release FullName" />
    </div>
      <div className="input-box">
      <input type="text" placeholder="Enter Passcode" />
    </div>

    <button className="buttongo">
        Get Wings
    </button>
      <div style={{paddingTop:"15px"}}>continue with</div>
   
    <div className="social-row">
    {/* Google */}
    <button className="social-btn google">
       <img 
    src="https://developers.google.com/identity/images/g-logo.png"
    width="30"
    alt="google"
/>

    </button>

    {/* GitHub */}
    <button className="social-btn github">
        <img 
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            width="30"
            alt="github"
        />
    </button>

    {/* LinkedIn */}
    <button className="social-btn linkedin">
        <img 
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            width="30"
            alt="linkedin"
        />
    </button>
</div>


    </div>

    )}