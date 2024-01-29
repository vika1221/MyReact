import React from 'react'
import { useParams } from 'react-router-dom'

function user() {
    const {userid}=useParams()

  return (
    <div className='text-center m-4 bg-gray-600 text-white text=3xl'>
      USER = {userid}
    </div>
  )
}

export default user
