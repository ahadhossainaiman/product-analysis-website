import React from 'react'

export default function Review(props) {
    const {name,phone,email,rating,description}= props.review
  return (
    <div className='m-5 border-2 border-indigo-600 p-6 mt-40'>
        <h3 className='text-center'>{name}</h3>
        <p><small>Phone:{phone}</small></p>
        <p><small>Email:{email}</small></p>
        <p>Rating:{rating}</p>
        <p>Description:{description}</p>


    </div>
  )
}
