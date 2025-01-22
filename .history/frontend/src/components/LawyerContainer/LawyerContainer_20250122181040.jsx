import React, { useEffect } from 'react'
import { fetchLawyers } from '../../redux'
import { useDispatch ,useSelector} from 'react-redux'
export const LawyerContainer=()=> {
    const lawyer=useSelector((state)=>state.lawyer);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchLawyers());
    },[])

    return (
        <div>
            
        <h2>LIST OF LAWYERS</h2>
        {lawyer.loading &&<div>Loading...</div>}
        {!lawyer.loading && lawyer.error?<div>Error</div>:null}
        {!lawyer.loading && lawyer.lawyers.length?(
            <ul>
                {lawyer.lawyers.map((lawyer)=>(
                    <li key={lawyer.id}>{lawyer.name}</li>
                ))}
            </ul>
        ):null}

        </div>
        
    )
}

