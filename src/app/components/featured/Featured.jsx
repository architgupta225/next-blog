import Image from 'next/image'
import React from 'react'

export const Featured = () => {
  return (
    <div className='mt-8 '>
      <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
        <b>Hey, Archit here!</b> Discover my stories and creative ideas.
      </h1>
      <div className='mt-16 flex items-center gap-12'>
        <div className='hidden lg:block flex-1 h-[500px] relative'>
          <Image src='/p1.jpeg' alt='' fill className=' lg:block object-cover' />
        </div>
        <div className='flex-1 flex flex-col gap-5'>
          <h1 className='text-[40px]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className='text-xl font-light text-softTextBg'>
            At veniam voluptatem repellat suscipit ipsa nisi minus omnis, quae ipsum debitis, quaerat rem mollitia, illum reprehenderit deleniti sint neque. Perferendis, similique?
          </p>
          <button className='px-5 py-4 border-none border-[5px] w-max bg-softBg'>Read More</button>
        </div>
      </div>
    </div>
  )
}
