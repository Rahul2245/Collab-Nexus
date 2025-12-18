import { useState } from "react"

export default function login(){
    // const [emailOrphn,setdetail]=useState("")

    // console.log(emailOrphn)
    return (
    <div className="logincard">
        <div>Login into your account</div>
        
      <div className="input-box">
      <input type="text" placeholder="Email/Phone" />
    </div>
    <div className="input-box">
      <input type="text" placeholder="Enter Passcode" />
    </div>
    <button className="buttongo">
        Go Fly
    </button>
   <div className="forgotpassRow">
    <div className="forgotpassLink">Forgot Passcode</div>
    <button className="helpBtn">Want wings?</button>
</div>
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




    )
}