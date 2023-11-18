import React from 'react'
import disney from '../assets/images/disney.png'
import hulu from '../assets/images/hulu.png'
import blogs from '../assets/images/blogs.png'
import movix from '../assets/images/movix.png'
import passwordgenrator from '../assets/images/passwordgenrator.png'
import youtube from '../assets/images/youtube.png'

function Project() {
  return (
    <>
      <div className='bg-white'>
        <div className='flex flex-wrap items-center justify-between p-8 '>
            <a href="https://youtube-pi-tawny.vercel.app/"><img className='w-96 rounded-md cursor-pointer' src={disney}   alt="" /></a>
            <a href="https://movix-kappa-sooty.vercel.app/"><img className='w-96 rounded-md cursor-pointer' src={movix}   alt="" /></a>
            <a href="https://disney-clone-steel.vercel.app/"><img className='w-96 rounded-md cursor-pointer' src={youtube}   alt="" /></a>
        </div>
        <div className='flex flex-wrap items-center justify-between p-8 '>
            <a href="https://hulu-clone-five-mu.vercel.app/"><img className='w-96 rounded-md cursor-pointer' src={hulu}   alt="" /></a>
            <a href="https://blog-pi-dusky.vercel.app/"><img className='w-96 rounded-md cursor-pointer' src={blogs}   alt="" /></a>
            <a href="#"><img className='w-96 rounded-md cursor-pointer' src={passwordgenrator}   alt="" /></a>
        </div>
      </div>
    </>
  )
}

export default Project