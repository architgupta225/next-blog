import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '../themeToggle/ThemeToggle'
import { AuthLinks } from '../authLinks/AuthLinks'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-[100px]'>
      <div className='gap-[10px] flex-1 hidden lg:flex'>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className='flex-1 text-left font-bold text-3xl md:text-4xl lg:text-center'>
        Blogs
      </div>
      <div className='flex flex-1 items-center justify-end text-sm md:text-lg gap-[15px] 2xl:gap-[20px]'>
        <ThemeToggle />
        <Link href='/' className='hidden sm:block'>Homepage</Link>
        <Link href='/' className='hidden sm:block'>Contact</Link>
        <Link href='/' className='hidden sm:block'>About</Link>
        <AuthLinks />
      </div>
      <div></div>
    </div>
  )
}
