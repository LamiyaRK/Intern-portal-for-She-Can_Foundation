import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import Spinner from '../assets/SharedPages/Spinner';

const Dashboard = () => {
    const [amount,setAmount]=useState([])
    const [loader,setLoader]=useState(true);
    useEffect(()=>{
           fetch('http://localhost:3000/total-donation')
           .then(res=>res.json())
           .then(data=>
            { 
                setAmount(data[0])
            setLoader(false)})
           .catch(err=>{console.log(err)
            setLoader(false)
           })
    },[amount])
   if(loader)return <Spinner/>
    return (
        <div className='w-5/6 mx-auto py-20 '>
        <div className='grid lg:grid-cols-3 gap-5 '>
            <div className='shadow-md bg-white flex justify-between items-center p-6 rounded-lg '>
              <div className='bg-red-500 p-2 rounded-lg'><IoPersonCircleOutline size={60} color='white' /></div>  
                <div>
                <h1 className='text-3xl'>Intern's Name:</h1>
                <p className='text-xl text-red-500 font-semibold text-end'>{amount.name}</p>
                </div>
            </div>
             <div className='shadow-md bg-white flex justify-between items-center p-6 rounded-lg '>
              <div className='bg-orange-500 p-2 rounded-lg'><IoPersonCircleOutline size={60} color='white' /></div>  
                <div>
                <h1 className='text-3xl'>Referral Code :</h1>
                <p className='text-xl text-orange-500 font-semibold text-end'>{amount.ref}</p>
                </div>
            </div>
             <div className='shadow-md bg-white flex justify-between items-center p-6 rounded-lg '>
              <div className='bg-red-500 p-2 rounded-lg'><IoPersonCircleOutline size={60} color='white' /></div>  
                <div>
                <h1 className='text-3xl'>Total donations raised:</h1>
                <p className='text-xl text-red-500 font-semibold text-end'>{amount.amount}</p>
                </div>
            </div>
            </div>
            <h1 className='text-center font-bold text-4xl my-20'>Your Rewards</h1>
            <div className='grid lg:grid-cols-2 2xL:grid-cols-4 gap-5 '>
                <div className='flex flex-col items-center justify-center p-5 text-center shadow-md bg-white '>
                    <img src='/row-1-column-1.jpg'></img>
                    <h1 className='text-3xl font-bold'>Silver Dropper</h1>
                    <p className='text-lg font-medium opactity-60 text-center'  >Your journey begins! You’ve raised ₹100+ and earned your very first badge.</p>
                </div>
                 <div className='flex flex-col items-center justify-center p-10 shadow-md bg-white rounded-lg'>
                    <img src='/row-1-column-3.jpg'></img>
                    <h1 className='text-3xl font-bold'> Bronze Rising</h1>
                    <p className='text-lg font-medium opactity-60 text-center' >More than a beginner. This badge honors your consistency and ₹300+ milestone!</p>
                    
                </div>
                 <div className='flex flex-col items-center justify-center p-5  shadow-md bg-white'>
                    <img src='/row-1-column-2.jpg'></img>
                    <h1 className='text-3xl font-bold'>Silver Spark</h1>
                    <p className='text-lg font-medium opactity-60 text-center' >YShining bright at ₹500+ raised — your impact is growing steadily!</p>
                </div>
                
                 <div className='flex flex-col items-center justify-center p-10 shadow-md bg-white rounded-lg'>
                    <img src='/row-2-column-1.jpg'></img>
                    <h1 className='text-3xl font-bold'> Silver Artisan</h1>
                    <p className='text-lg font-medium opactity-60 text-center' >Elegance meets effort. Raised ₹800+ with style and dedication!</p>
                    
                </div>
                
            </div>
             <h1 className='text-center font-bold text-4xl my-20'>Next Milestones to Achieve</h1>
            <div  className='grid lg:grid-cols-2 2xL:grid-cols-4 gap-5 '>
                 <div className='flex flex-col items-center justify-center p-10 shadow-md bg-white rounded-lg opacity-50 grayscale'>
                    <img src='/row-2-column-2.jpg'></img>
                    <h1 className='text-3xl font-bold'> Golden Flame</h1>
                    <p className='text-lg font-medium opactity-60 text-center' >₹1000+ raised. You’ve become a beacon of contribution and care.</p>
                </div>
                 <div className='flex flex-col items-center justify-center p-10 shadow-md bg-white rounded-lg opacity-50 grayscale'>
                    <img src='/row-2-column-3.jpg'></img>
                    <h1 className='text-3xl font-bold'> Golden Elite</h1>
                    <p className='text-lg font-medium opactity-60 text-center' >The highest honor! Raised ₹2000+ — your excellence and effort are unmatched.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;