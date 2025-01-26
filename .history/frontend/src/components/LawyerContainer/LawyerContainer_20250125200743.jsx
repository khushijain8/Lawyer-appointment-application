import React, { useEffect } from 'react'
import { fetchLawyers,bookSlot,selectSlot } from '../../redux/Lawyer/lawyerSlice'
import { useDispatch ,useSelector} from 'react-redux'
import './LawyerContainer.css'
export const LawyerContainer=()=> {
    const lawyer=useSelector((state)=>state.lawyer);
    console.log(lawyer.firm);
    console.log('hello');
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchLawyers());
    },[dispatch])

    const handleBook = (lawyerId, slotIndex) => {
        dispatch(selectSlot({ lawyerId, slotIndex }));
        dispatch(bookSlot());
      };
    return (
        <div>
        <h2>LIST OF LAWYERS</h2>
        {lawyer.loading &&<div>Loading...</div>}
        {!lawyer.loading && lawyer.error?<div>Error</div>:null}
        {!lawyer.loading && lawyer.lawyers.length?(
           <div className="parent-div">
           {lawyer.lawyers.map((lawyer) => (
             <div className="inner-div" key={lawyer.email}>
               <h2 className="font-bold">{lawyer.name}</h2>
               <p><strong>Email:</strong> {lawyer.email}</p>
               <p><strong>Speciality:</strong> {lawyer.speciality.join(", ")}</p>
               <p><strong>Cost Per Appointment:</strong> ₹{lawyer.costPerAppointment}</p>
               <p><strong>Availability:</strong></p>
               <ul style={{ paddingLeft: "20px" }}>
                 {lawyer.availability.map((slot, index) => (
                   <li key={index}>
                    {slot.date} - {slot.time}
                    {slot.isAvailable ? 
                    <>
                        <span className='mx-4' >  Available  </span>
                        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleBook(lawyer._id, index)} >Book</button>
                    </>
                    :
                     <span className='mx-4' >  Not Available  </span>}
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

