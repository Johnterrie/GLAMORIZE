"use client"

import Image from "next/image"
import Rating from 'react-star-rating-component';
import { useState } from 'react';
import { reviewData } from "@/data";
import Link from "next/link";


const ReviewComment = () => {
  const [rating, setRating] = useState(0);
  // const handleStarClick = (nextValue: number, prevValue: number, name: string): number => {
  //   setRating(nextValue);
  //   return nextValue;
  // };
  return (
    <div className='relative w-[727px] h-[750px] flex flex-col items-center'>
      <div className="relativeh-[198px] mb-[20px] w-full flex flex-col justify-between items-start">
        <div className="relative text-B900 font-bold text-normalSemiBold">Review</div>
        <div className="relative flex items-center">
          <div className="relative text-semiBold font-bold mr-[10px] flex">4.2</div>
          <div className="text-B500 text-regular"> - <span className="ml-[10px]" >54</span> Review</div>
        </div>
        <Link href="" className="w-[144px] h-[44px] text-looseMedium border-B900 border flex justify-center items-center mt-[30px] rounded">Write a review</Link>
        <div className="border-W200 border-b-2  w-full h-[40px] flex text-B500 text-regular items-center justify-end">
          <span>SORT BY</span>
          <Image src="/Chevron Down.png" width={24} height={24} alt="Chevron Down" />
        </div>
      </div>
      {reviewData.map((result) => {
        return (

          <div key={result.id} className="w-[700px] mb-[20px]  text-B500 text-regular flex justify-between items-start">
            <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-B100 text-B900">ED</div>
            <div className="w-[630px] flex justify-between">
              <div className="flex flex-col justify-between h-[90px]">
                <div>
                  <div className="font-bold">{result.name}</div>
                  <div>{result.reviewDate}</div>
                </div>
                <div>{result.reviewData}</div>
              </div>
              <Rating
                name="review rating"
                value={rating}
                starCount={5}
                starColor={'#ffb400'}
                emptyStarColor={'#ccc'}

              />
            </div>
          </div>
        )
      })}
      <Link href="" className="w-[175px] h-[44px] text-regular text-B500 mt-[50px] border flex justify-center items-center">
        Load more reviews
      </Link>
    </div>
  )
}

export default ReviewComment
