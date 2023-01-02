import React from 'react';
import Error from '../../404.jpg';

export default function () {
  return (
    <div>
        <h1 className='text-4xl text-center mt-12'>Page Note Found 404!</h1>
        <img src={Error} className='w-1/2 h-1/2 block m-auto mt-32 rounded-xl'/>
    </div>
  )
}
