import React, { useEffect } from 'react'
import { fetchLawyers} from '../../redux/Lawyer/lawyerSlice'
import { useDispatch ,useSelector} from 'react-redux'

const LawyerHistoryContainer = () => {
    const lawyers=useSelector((state)=>state.lawyer);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchLawyers());
    },[dispatch])
    
    return (
        <div>
        <h2>BOOKING HISTORY</h2>
        {lawyers.loading &&<div>Loading...</div>}
        {!lawyers.loading && lawyers.error?<div>Error</div>:null}
        {!lawyers.loading && lawyers.lawyers.length?(
           <div>
           <h2>BOOKING HISTORY</h2>
           {lawyers.length ? (
               <div>
                   <h2>Lawyers and Their Booking History</h2>
                   {lawyers.map((lawyer) => (
                       <div key={lawyer._id}>
                           <h3>{lawyer.name}</h3>
                           <p>Booking History:</p>
                           {lawyer.bookingHistory.length > 0 ? (
                               <ul>
                                   {lawyer.bookingHistory.map((history, index) => (
                                       <li key={index}>{history}</li>
                                   ))}
                               </ul>
                           ) : (
                               <p>No bookings yet</p>
                           )}
                       </div>
                   ))}
               </div>
           ) : (
               <p>No lawyers available</p>
           )}
       </div>):null}
       </div>

    );
};

export default LawyerHistoryContainer;
