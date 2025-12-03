import React from 'react'

const Counter = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center py-12'>
            <div>
                <p className='text-4xl font-bold'>331,793</p>
                <p className='text-blue-600 font-semibold'>Succesful and compaigns</p>
            </div>
    
            <div>
                <p className='text-4xl font-bold'>$215,415,327</p>
                <p className='text-blue-600 font-semibold'>Earned so far by our affiliates</p>
            </div>
            <div>
                <p className='text-4xl font-bold'>14,122,817</p>
                <p className='text-blue-600 font-semibold'>Calls attracted</p>
            </div>
        </div>
    </div>
  )
}

export default Counter