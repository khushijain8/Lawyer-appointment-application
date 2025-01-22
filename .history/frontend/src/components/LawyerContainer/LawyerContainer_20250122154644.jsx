import React from 'react'
import {connect} from 'react-redux'
import { fetchLawyers } from '../../redux'
function LawyerContainer() {
  return (
    <div>LawyerContainer</div>
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

export default LawyerContainer