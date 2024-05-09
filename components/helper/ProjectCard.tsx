import Image from 'next/image';
import React from 'react'

interface Props {
image:string;
title:string;
tech1:string;
tech2:string;
tech3:string;
tech4:string;
}
export default function ProjectCard({image,title,tech1,tech2,tech3,tech4}:Props) {
  return (
    <div className='grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
       <div className="p-4 rounded-xl relative cursor-pointer hover:rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image src={`${image}`} alt={title} width={500}  height={500} className='object-contain rounded-xl mx-auto shadow-md'/>
       </div>
       <div className="">
        <p className='text-white text-[25px] '>{title}</p>
            <p className='text-white opacity-65 text-[15px] mt-[1rem] ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eius perspiciatis. Ab sequi necessitatibus cumque, fuga qui culpa, neque velit placeat debitis praesentium ipsam aut reiciendis natus, aspernatur maiores! Laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi hic vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus magni vel numquam?</p>
            <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
                <h1 className='px-6 py-3 bg-blue-700 text-white rounded-lg text-cenetr '>{tech1}</h1>
                <h1 className='px-6 py-3 bg-white text-black rounded-lg text-cenetr '>{tech2}</h1>
                <h1 className='px-6 py-3 bg-sky-500 text-black rounded-lg text-cenetr '>{tech3}</h1>
                <h1 className='px-6 py-3 bg-blue-700 text-white rounded-lg text-cenetr '>{tech4}</h1>
            </div>
       </div>
    </div>
  )
}
