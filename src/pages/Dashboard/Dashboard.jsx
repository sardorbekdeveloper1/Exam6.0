import React from 'react'
import Header from '../../components/Header/Header'

function Dashboard() {
  return (
    <div>
      <Header/>
      <div className='flex flex-col'>
        <div className='ml-[127px] mt-[53px]'>
          <h1 className='text-[36px] font-[600]'>
          Welcome to your dashboard, Udemy school
          </h1>
          <p className='text-[24px] font-[600] ml-[105px]'>
          Uyo/school/@teachable.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard