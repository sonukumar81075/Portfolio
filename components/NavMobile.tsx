import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props{
    shownav:boolean;
    closenav:()=>void;
}
const NavMobile = ({shownav,closenav}:Props) => {
    const navopenstyle = shownav ? "tranalate-x-0":"translate-x-[-100%]"
  return (
    <div className="">

    <div className={`fixed top-0 transform ${navopenstyle} transition-all duration-500 z-1000 left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}>
   
    </div>
    <ul className={`text-white fixed flex items-center ${navopenstyle}  flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[1006] capitalize`}>
    
    <li><a className='nav__link text-[25px] sm:text-[30px]' href="#">home</a></li>
    <li><a className='nav__link text-[25px] sm:text-[30px]' href="#">about</a></li>
    <li><a className='nav__link text-[25px] sm:text-[30px]' href="#">services</a></li>
    <li><a className='nav__link text-[25px] sm:text-[30px]' href="#">blog</a></li>
    <li><a className='nav__link text-[25px] sm:text-[30px]' href="#">contact</a></li>

    <XMarkIcon onClick={closenav} className='absolute top-[1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white'/>
</ul>
    </div>
  )
}

export default NavMobile
