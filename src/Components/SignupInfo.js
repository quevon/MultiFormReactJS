import React from "react"


function SignupInfo({formData, setFormData}){
    return(
        <div>
            <input type="text" placeholder="Email..." 
                value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value})}>
            </input><br/>
            <input type="text" placeholder="Password..."
                value={formData.password} onChange={(event) => setFormData({...formData, password: event.target.value})}>
            </input><br/>
            <input type="text" placeholder="Password Confirmation..."
                value={formData.confirmPassword} onChange={(event) => setFormData({...formData, confirmPassword: event.target.value})}>
            </input><br/>
        </div>
        
    )
}

export default SignupInfo;