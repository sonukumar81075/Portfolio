import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import React, { useEffect, useState } from 'react'
import Link from "next/link";

interface Props {
  opennav:()=>void
}
const Nav = ({opennav}:Props) => {
  const [navsicky,setNavSticky] = useState(false)

  useEffect(()=>{
    const handler = () => {
      if(window.scrollY>=90){
        setNavSticky(true)
      } 
      if(window.scrollY<=90){
        setNavSticky(false)
      }
    }
    window.addEventListener('scroll',handler)
  },[])
  return (
    <div className={`fixed w-[100%] ${navsicky ? "bg-[#212428] shadow-gray-900 shadow-sm" : ""} transition-all duration-300 z-[1000]`}>
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
            <span className='text-[24px] md:text-[35px] text-yellow-600  font-sans'>Te</span>chnoglobe
        </div>
        <ul className='md:flex hidden items-center space-x-10 capitalize'>
          <li><Link className='nav__link' href="/">home</Link></li>
          <li><Link className='nav__link' href="/#">about</Link></li>
          <li><Link className='nav__link' href="/#">services</Link></li>
          <li><Link className='nav__link' href="/#">blog</Link></li>
          <li><Link className='nav__link' href="/#">contact</Link></li>
        </ul>
        <HiMiniBars3BottomLeft onClick={opennav} className='w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180' />
      </div>
    </div>
  )
}
export default Nav;
