import React, { useEffect, useState } from 'react';
import Spinner from '../assets/SharedPages/Spinner';

const LeaderBoard = () => {

    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true);
        useEffect(()=>{
               fetch('https://intern-portal-for-she-canfoundation-production.up.railway.app/leaderboard')
               .then(res=>res.json())
               .then(data=>
                { 
                    setData(data)
                    setLoader(false)
                  }
                  )
               .catch(err=>{console.log(err)
                setLoader(false)
               })
        },[])
       if(loader)return <Spinner/>
    return (
        <div className='w-5/6 mx-auto'>
         <h1 className='text-center font-bold text-4xl mt-20 mb-2 text-[#e48061]'>Leader Board</h1>
         <p className='font-medium  text-center mb-20 '>See who’s leading the charge in raising donations</p>
        <div className="overflow-x-auto rounded-box border-2  bg-base-100 mb-20 border-[#e48061] shadow-md">
  <table className="table ">
   
    <thead>
      <tr className='text-[#e48061] text-xl'>
        <th></th>
        <th>Name</th>
        <th>Referral Code</th>
        <th>Total Donations</th>
      </tr>
    </thead>
    <tbody>
    {data.map((da,index)=><tr className='text-lg'>
        <th>{index+1}</th>
        <td>{da.name}</td>
        <td>{da.referralCode
}</td>
        <td>{da.totalDonations
}</td>
      </tr>
    )}
     
     </tbody>
  </table>
</div>
</div>
    );
};

export default LeaderBoard;