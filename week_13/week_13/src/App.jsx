import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='grid grid-cols-1  sm:grid-cols-12'>
      <div className='col-span-1 sm:col-span-6 bg-red-300'>
        hi
      </div>
      <div className='col-span-1 sm:col-span-4 bg-green-300'>
        hi
      </div>
      <div className='col-span-1 sm:col-span-2 bg-blue-300'>
        hi
      </div>
    </div>   
    </>
  )
}

export default App
