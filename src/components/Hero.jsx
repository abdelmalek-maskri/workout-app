import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span className='text-blue-400'>BIIIG</span></h1>
            </div>
            <p className='text-base md:text-lg font-normal leading-relaxed'>
            By proceeding, I fully embrace the possibility of becoming <span className='text-purple-500 font-bold'>ridiculously shredded</span>, taking on the esteemed title of the local <span className='text-purple-500 font-bold'>muscle monarch</span>. I accept all challenges, including potential struggles with narrow doorways and an overabundance of mirror selfies.
            </p>

            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
