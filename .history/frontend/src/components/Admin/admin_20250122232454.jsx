import React, { useEffect } from 'react'
import { fetchLawyers} from '../../redux/Lawyer/lawyerSlice'
import { useDispatch ,useSelector} from 'react-redux'

const LawyerHistory = () => {
    const lawyer=useSelector((state)=>state.lawyer);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchLawyers());
    },[dispatch])

  const parseBookingHistory = (bookingHistory) => {
    return bookingHistory.map((booking, index) => {
      const details = booking.split("\n")[0];
      return {
        bookingId: index + 1,
        details,
      };
    });
  };

  return (
    <div>
      {loading && <p>Loading lawyers...</p>}
      {error && <p>Error: {error}</p>}

      {lawyers.map((lawyer) => (
        <div key={lawyer._id}>
          <h2>{lawyer.name}</h2>
          {lawyer.bookingHistory.length === 0 ? (
            <p>No bookings yet</p>
          ) : (
            <ul>
              {parseBookingHistory(lawyer.bookingHistory).map((booking) => (
                <li key={booking.bookingId}>
                  <strong>{booking.details}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default LawyerHistory;
