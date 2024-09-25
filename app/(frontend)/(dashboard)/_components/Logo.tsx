import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <div className="overflow-hidden h-10 w-full  flex justify-start items-center">
        <img src="/logo.svg" alt=""  className='h-10 w-10  scale-[3] '/>
        <p className='text-2xl font-bold'>LearnGo</p>
      </div>
    </Link>
  )
}

export default Logo;
