"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submithandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}])
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }

  const deletehandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No task available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return <li className='flex items-center justify-between mb-8'>
        <div className='flex justify-between items-center w-2/3'>
          <h5 className='text-2xl font-semibold '>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button onClick={()=>{
          deletehandler(i)
        }} className='bg-red-400 text-white rounded px-4 py-2 font-bold'>Delete</button>
      </li>
    })
  }

  return (
      <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Sayyam's Todo list</h1>
      <form onSubmit={submithandler}>
        <input value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }} type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Title Here'/>
        <input value={desc} onChange={(e)=>{
          setDesc(e.target.value)
        }} type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Description Here'/>
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add task</button>
      </form>
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
      </>
  )
}

export default page
