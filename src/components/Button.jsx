import React from 'react'

export default function Button({text, func}) {
  return (
    <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200'>
        <p>{text}</p>
    </button>
  )
}
