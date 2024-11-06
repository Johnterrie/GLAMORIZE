"use client"

import { useState } from 'react'
import Image from 'next/image'
import Carousel from '../ui/carousel'
import { ProductType } from '@/types'
import { Button } from '../ui/button'

const ProductItem = ({ name, inStock, price }: ProductType) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='w-[1092px] h-[574px] flex justify-between items-center'>
      <div className="relative w-[534px] h-full bg-W100 flex justify-center items-center">
        <Carousel />
      </div>
      <div className='w-[438px] h-[562px] flex flex-col justify-between items-start'>
        <div className='w-full h-[29px] flex justify-between items-center'>
          <div className='text-normalBold font-bold'>{name}</div>
          <Image src="/Share.png" alt='Share' width={24} height={24} />
        </div>
        <div className='w-[272px] h-[28px] text-looseMedium text-B500 flex justify-between'>
          <div className='flex justify-around items-center w-[167px] h-[28px] rounded-full bg-W100'>
            <Image src="/Star.png" alt='Star' width={24} height={24} />
            <span>4.2 — 54 Reviews</span>
          </div>
          {inStock ? <span className=" border-2 border-B100 w-[89px] h-[28px] flex justify-center items-center rounded-full ">IN STOCK</span> : <></>}
        </div>
        <div className='text-normalSemiBold font-semibold'>${price}</div>

        <div>
          <div className='h-[24px] w-[126px] text-looseMedium text-B500'>AVAILABLE COLORS</div>
          <div className='w-[116px] h-[32px] flex justify-between items-center'>
            <div className='w-[32px] h-[32px] rounded-full bg-B400'></div>
            <div className='w-[32px] h-[32px] rounded-full bg-Y400'></div>
            <div className='w-[32px] h-[32px] rounded-full bg-G400'></div>
          </div>
        </div>

        <div>
          <div className='h-[24px] w-[126px] text-looseMedium text-B500'>SELECT SIZE</div>
          <div className='w-[232px] h-[40px] flex justify-between items-center'>
            <div className='w-[40px] h-[40px] border-2 border-B100 flex justify-center items-center'>S</div>
            <div className='w-[40px] h-[40px] border-2 border-B100 flex justify-center items-center'>M</div>
            <div className='w-[40px] h-[40px] border-2 border-B100 flex justify-center items-center'>X</div>
            <div className='w-[40px] h-[40px] border-2 border-B100 flex justify-center items-center'>XL</div>
            <div className='w-[40px] h-[40px] border-2 border-B100 flex justify-center items-center'>XXL</div>
          </div>
        </div>

        <div>
          <div className='h-[24px] w-[126px] text-looseMedium text-B500'>QUALITY</div>

          <div className="flex justify-around font-bold text-regular items-center border-2 border-B100 w-[164px] h-[44px] ">
            <button className='w-[20px] h-[20px]' onClick={decrement}>-</button>
            <span>{count}</span>
            <button className='w-[20px] h-[20px] ' onClick={increment}>+</button>
          </div>
        </div>

        <div className='w-4/6 flex'>
            <Button className='w-[282px] h-[44px] justify-center items-center test-looseMedium bg-B900 text-W900'> Add to Cart</Button>
            <div className='w-[43px] h-[43px] flex justify-center items-center'>
              <Image src="./Whishlist.svg" width={24} height={24} alt='like'/>
            </div>
        </div>

        <div className='text-looseMedium text-B500'>
        — Free shipping on orders $100+
        </div>
      </div>
    </div>
  )
}

export default ProductItem
