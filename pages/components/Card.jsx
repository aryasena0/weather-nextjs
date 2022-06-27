import React from 'react'

const Card = (props) => {
  return (
    <div>
      {  props.city !== 'default' ? (
            props.temprature > 20 ? (
               <article className="p-7 md:w-[300px] grid grid-flow-row gap-2 bg-[#FFA500] rounded-xl">
                  <h2 className="text-3xl font-bold text-orange-600">{props.name}</h2>
                  <p className='text-6xl'>{props.temprature} <span className='text-orange-600'>C</span></p>
                  <p>{props.desc}</p>
               </article>
            ) : (
               <article className="p-7 md:w-[300px] grid grid-flow-row gap-2 bg-slate-700 rounded-xl">
                  <h2 className="text-3xl font-bold text-blue-400">{props.name}</h2>
                  <p className='text-6xl'>{props.temprature} <span className='text-blue-400'>C</span></p>
                  <p>{props.desc}</p>
               </article>
            )
         ) : <h1 className='text-zinc-700'>search country or city...</h1>
      }
    </div>
  )
}

export default Card