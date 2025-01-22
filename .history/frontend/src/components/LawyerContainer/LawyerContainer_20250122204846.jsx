import React, { useEffect } from 'react'
import { fetchLawyers } from '../../redux/Lawyer/lawyerSlice'
import { useDispatch ,useSelector} from 'react-redux'
export const LawyerContainer=()=> {
    const lawyer=useSelector((state)=>state.lawyer);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchLawyers());
    },[dispatch])
    return (
        <div>
        <h2>LIST OF LAWYERS</h2>
        {lawyer.loading &&<div>Loading...</div>}
        {!lawyer.loading && lawyer.error?<div>Error</div>:null}
        {!lawyer.loading && lawyer.lawyers.length?(
           <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
           {lawyer.lawyers.map((lawyer) => (
             <div
               key={lawyer.email}
               style={{
                 border: "1px solid #ccc",
                 borderRadius: "8px",
                 padding: "16px",
                 width: "300px",
                 boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
               }}
             >
               <h3 style={{ margin: "0 0 10px 0" }}>{lawyer.name}</h3>
               <p><strong>Email:</strong> {lawyer.email}</p>
               <p><strong>Speciality:</strong> {lawyer.speciality.join(", ")}</p>
               <p><strong>Cost Per Appointment:</strong> ₹{lawyer.costPerAppointment}</p>
               <p><strong>Availability:</strong></p>
               <ul style={{ paddingLeft: "20px" }}>
                 {lawyer.availability.map((slot, index) => (
                   <li key={index}>
                     {slot.date} - {slot.time} ({slot.isAvailable ? "Available" : "Not Available"})
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
         
        ):null}

        </div>
        
    )
}

