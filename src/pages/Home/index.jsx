import React from 'react'
import Header from '../../components/header/header'
import Card from  '../../components/Card/card.jsx'
const index = () => {
  return (
    <>
      <Header/>
      <div className="flex justify-around mt-[20%] items-center  ">
       <div className="py-10">
       <h1 className='text-[30px] font-bold align-middle'>Welcome Ayobami 👋</h1>
        <span> To the Virtual Learning System </span>
       </div>
       <div className="  gap-x-5 flex justify-between">
        <Card/>
        <Card/>
       {/* <button className="px-4 py-1 font-medium bg-blue-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Login as Student
      </button> */}
      {/* <button className="px-4 py-1 font-medium bg-blue-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Login as Teacher
      </button> */}
       </div>
      </div>
    </>
  )
}

export default index

