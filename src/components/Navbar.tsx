import React from 'react'
import { Poppins } from 'next/font/google'

const inter = Poppins({ weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Navbar = () => {
  return (
    <div>
        <nav className={inter.className}>
        <div className='py-[20px] px-[40px] bg-[#00000096]'>
          <h1 className='text-[20px] text-white font-[300]'>Your<span className='font-bold'>Random</span>Words</h1>
        </div>
      </nav>
    </div>
  )
}

export default Navbar