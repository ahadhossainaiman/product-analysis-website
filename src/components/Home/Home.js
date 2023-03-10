// import React, { useEffect, useState } from "react";
import { animated, useSpring } from '@react-spring/web';
import { useNavigate } from "react-router-dom";
import useReview from "../../Hook/useReview";
import Review from "../Review/Review/Review";
import HeroSection from "./HeroSection/HeroSection";

export default function Home() {
    const navigate = useNavigate();
    const springs = useSpring({
        from: { y: 0 },
        to: { y: 50 },
      })
    // const [reviews,setReviews] = useState([]);
    // useEffect(()=>{
    //     fetch('review.json')
    //     .then(res=>res.json())
    //     .then(data=>setReviews(data))
    // },[])
    const [reviews,setReviews] = useReview();

console.log(reviews);
    const review_3 = reviews.slice(0,3);
    console.log(review_3);
    const handleClick = () =>{
        navigate('/reviews')
    }
    
  return <div className="mt-10">
            <HeroSection></HeroSection>
            <div className="grid grid-cols-3 w-full">
            {
                review_3.map(review=><Review review={review}></Review>)
            }
            </div>
            
            <animated.div style={{
        ...springs,
      }} ><button className="block m-auto py-3 px-16 bg-blue-700 text-white font-bold rounded-md hover:bg-orange-700 mb-72" onClick={handleClick}>See All Review</button></animated.div>
        </div>;
}
