import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchLawyers } from '../../redux'
function LawyerContainer({fetchLawyers,lawyerData}) {
    useEffect(()=>{
        fetchLawyers()
    },[])
  return lawyerData.loading?(
    <h2>loading data</h2>
  ):lawyerData.error?(
    <h2>{lawyerData.error}</h2>
  ):(
    <h2>data</h2>
  )
}
const mapStateToProps=state=>{
    return{
        lawyerData:state.lawyers
    }
}
const mapDispatchtoProps=dispatch=>{
    return{
        fetchLawyers:()=> dispatch(fetchLawyers())
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(LawyerContainer)
