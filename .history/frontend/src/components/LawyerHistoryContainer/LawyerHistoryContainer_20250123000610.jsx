import React, { useEffect } from 'react'
import { fetchLawyers} from '../../redux/Lawyer/lawyerSlice'
import { useDispatch ,useSelector} from 'react-redux'
import './LawyerHistoryContainer.css'
const LawyerHistoryContainer = () => {
    const { lawyers, loading, error } = useSelector((state) => state.lawyer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLawyers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>BOOKING HISTORY</h2>
            {lawyers.length ? (
                <div className="lawyer-cards-container">
            
                    {lawyers.map((lawyer) => (
                        <div key={lawyer._id} className="lawyer-card">
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
        </div>
    );
};

export default LawyerHistoryContainer;
