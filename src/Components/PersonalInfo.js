import React from "react"


function PersonalInfo({formData, setFormData}){
    return(
        <div className="personal-info-container">
            <input type="text" placeholder="Firstname..."
                value={formData.firstName} onChange={(event) => setFormData({...formData, firstName: event.target.value})}>
            </input><br/>
            <input type="text" placeholder="Lastname..."
                value={formData.lastName} onChange={(event) => setFormData({...formData, lastName: event.target.value})}>
            </input><br/>
            <input type="text" placeholder="Username..."
                value={formData.userName} onChange={(event) => setFormData({...formData, userName: event.target.value})}>
            </input><br/>
        </div>
    )
}

export default PersonalInfo;