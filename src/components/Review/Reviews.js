import React, { useEffect, useState } from 'react';
import useReview from '../../Hook/useReview.js';
import Review from './Review/Review.js';

export default function Reviews() {
    // const [reviews,setReviews] = useState([]);
    // useEffect(()=>{
    //     fetch("review.json")
    //     .then(res=>res.json())
    //     .then(data=>setReviews(data))
    // },[])
    // console.log(reviews);
    const [reviews,setReviews] = useReview()
  return (
    <div className='grid grid-cols-3' >
        {
            reviews.map((review)=><Review review={review}></Review>)
        }
    </div>
  )
}
