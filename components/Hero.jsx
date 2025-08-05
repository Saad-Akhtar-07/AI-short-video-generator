import React from 'react'
import { Button } from './ui/button'
import Authentication from './Authentication'
function Hero() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-4 md:p-8 lg:p-16 md:px-16 lg:px-24 xl:px-36'>
        <div className='flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6'>
            <h1 className='text-5xl font-bold text-center'>AI Short Video Generator</h1>
            <p className='text-gray-500 text-2xl text-center md:text-2xl lg:text-3xl'>AI Short Video Generator is a tool that uses AI to generate short videos based on your input.</p>
        </div>
        <div className='mt-7 flex items-center justify-center gap-2'>
            <Button size="lg" variant="outline" className='bg-blue-500 hover:bg-blue-600'>Explore</Button>
            <Authentication>
            <Button size="lg" variant="default" className='bg-blue-500 hover:bg-blue-600'>Get Started</Button>
            </Authentication>
        </div>
    </div>
  )
}

export default Hero