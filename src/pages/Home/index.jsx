import React from 'react'
import Header from '../../components/header/header'
import Card from  '../../components/Card/card.jsx'
import AdminCard from '../../components/Card/AdminCard.jsx'
const index = () => {
  return (
    <>
      <Header/>
      <div className="flex justify-around mt-[20%] items-center  ">
       <div className="py-10">
       <h1 className='text-[30px] font-bold align-middle'>Welcome Ayobami 👋</h1>
        <span> To the Virtual Learning System </span>
       </div>
       <div className="gap-x-5 flex justify-between">
       <Card/>
       <AdminCard/>
       </div>
      </div>
    </>
  )
}

export default index

