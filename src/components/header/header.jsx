import React from 'react'
import '../header/header.css';
import LogoutIcon from '@mui/icons-material/Logout';
const header = () => {
  return (
    <>
    <div className="flex justify-between items-center p-3">
       <div className="flex items-center gap-2">
        <img src="https://ug.lidc.lasu.edu.ng/ft-includes/assets/img/logo/logo.png" className='h-[50px]' alt='lasu-img'/>
        <span>Lagos State University</span>
       </div>
        <div className="">
          <button className="px-10 py-2 bg-blue-500 text-[13px] rounded-md text-white">Log out
          <LogoutIcon
          className='h-[50px]'
          />
          </button>
        </div>
    </div>
    </>
  )
}

export default header
