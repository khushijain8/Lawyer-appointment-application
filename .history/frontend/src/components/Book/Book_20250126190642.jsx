import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setFirm } from '../../redux/Lawyer/lawyerSlice';
import techsys_img from '../../assets/techys.png';
import invovatech_img from '../../assets/invovatech.png';
function Book() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleClick=(firm)=>{
    dispatch(setFirm(firm));
    navigate('/firm');
  }
  return (
    <>
    <div className='root-div mx-10 ' >
      <div className="max-w-sm w-full lg:max-w-full lg:flex p-10">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${techsys_img})` }}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">  
            <div class="text-gray-900 font-bold text-xl mb-2">Tristar Law Partners</div>
            <p class="text-gray-700 text-base"> Tristar Law Partners founded in 2010, has carved a niche in family law and real estate legal services. Known for its compassionate approach to sensitive matters, Firm B prides itself on providing personalized legal counsel to individuals facing complex family disputes or property-related issues. With an experienced team of legal professionals, the firm has earned a strong reputation for resolving disputes amicably while safeguarding the interests of its clients.</p>
          </div>
          <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>handleClick('firm1')}>BOOK</button>
        </div>
      </div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex p-10">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow:hidden" style={{ backgroundImage: `url(${invovatech_img})` }}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            
            <div className="text-gray-900 font-bold text-xl mb-2">LexGuard Legal</div>
            <p className="text-gray-700 text-base">LexGuard Legal established in 2005, has rapidly risen to become one of the leading law firms in the region, specializing in corporate litigation and intellectual property law. With a team of highly skilled attorneys, the firm offers comprehensive legal services to multinational companies, helping them navigate complex legal challenges in various industries. The firms dedication to client success and its reputation for delivering exceptional outcomes in high-stakes cases has made it a trusted partner for businesses worldwide.</p>
          </div>
            <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>handleClick('firm2')}>BOOK</button>
         
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Book