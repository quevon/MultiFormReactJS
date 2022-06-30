import React from "react"


function OtherInfo({formData, setFormData}){
    return(
        <div className="other-info-container">
            <input type="text" placeholder="Nationality..."
                value={formData.nationality} onChange={(event) => setFormData({...formData, nationality: event.target.value})}>
            </input><br/>
            <input type="text" placeholder="Other..."
                value={formData.other} onChange={(event) => setFormData({...formData, other: event.target.value})}>
            </input><br/>
        </div>
    )
}

export default OtherInfo;