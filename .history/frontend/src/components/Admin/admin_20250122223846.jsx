import React from 'react'
import {useSelector} from 'react-redux'

function Admin() {
    const {lawyers,bookingHistory}=useSelector(state => state.lawyer);
    // const getBookingHistoryForLawyer=(lawyerId) => {
    //     return bookingHistory.filter(booking => booking.lawyerId === lawyerId);
    // };
    return (
    <div>
        {bookingHistory}

      {/* {lawyers.map(lawyer => {
        const bookings = getBookingHistoryForLawyer(lawyer._id); 
        return (
          <div key={lawyer._id}>
            <h3>{lawyer.name}</h3>
            {bookings.length > 0 ? (
              <div>
                <h4>Booking History:</h4>
                <ul>
                  {bookings.map((booking, index) => (
                    <li key={index}>
                      <strong>{booking.slotDate} - {booking.slotTime}</strong>
                      <br />
                      Booked At: {new Date(booking.bookedAt).toLocaleString()}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No bookings yet for this lawyer.</p>
            )}
          </div>
        );
      })} */}
    </div>
  );
}

export default Admin