"use client"

import { useState } from 'react'
import Image from 'next/image'
import Carousel from '../ui/carousel'
import { ProductType } from '@/types'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { copyData } from '@/data'
import Link from 'next/link'


const ProductItem = ({ name, inStock, price }: ProductType) => {
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const textToCopy = "Hello, this text will be copied!";

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='w-[1092px] relative h-[574px] flex mb-[180px] justify-between items-center'>
      <div className="relative w-[534px] h-full bg-W100 flex justify-center items-center">
        <Carousel />
      </div>
      <div className='relative w-[438px] h-[562px] flex flex-col justify-between items-start'>
        <div className='relative w-full h-[29px] flex justify-between items-center'>
          <div className='relative text-normalBold font-bold'>{name}</div>
          <Image src="/Share.png" alt='Share' width={24} height={24} />
          <div className='absolute hidden flex flex-col px-[50px] py-[30px] justify-around z-40 border border-w500 right-0 w-[440px] h-[282px] top-0 bg-W900'>
            <div className='flex justify-between'>
              <span className='text-NormalSemiBold text-B900 font-bold'>Copy Link</span>
              <Link href="">
                <Image src="/close.png" alt='close' width={20} height={20} />
              </Link>
            </div>
            <div className='flex justify-between'>
              <Input className='w-[268px] h-[44px]' />
              <CopyToClipboard text={textToCopy} onCopy={() => setCopied(true)}>
                <button>{copied ? "Copied!" : <Image src="/Frame 3.png" alt='copy to clipboard' height={44} width={44} />}</button>
              </CopyToClipboard>
            </div>
            <div>Share</div>
            <div className="w-[216px] h-[24px] flex justify-between">
              {
                copyData.map((result) => {
                  return (
                    <Image key={result.id} className='' src={result.src} alt='' height={24} width={24} />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='relative w-[272px] h-[28px] text-looseMedium text-B500 flex justify-between'>
          <div className='relative flex justify-around items-center w-[167px] h-[28px] rounded-full bg-W100'>
            <Image src="/Star.png" alt='Star' width={24} height={24} />
            <span>4.2 — 54 Reviews</span>
          </div>
          {inStock ? <span className="relative border-2 border-B100 w-[89px] h-[28px] flex justify-center items-center rounded-full ">IN STOCK</span> : <></>}
        </div>
        <div className='relative text-normalSemiBold font-semibold'>${price}</div>

        <div>
          <div className='relative h-[24px] w-[126px] text-looseMedium text-B500'>AVAILABLE COLORS</div>
          <div className='relative w-[116px] h-[32px] flex justify-between items-center'>
            <div className='relative w-[32px] h-[32px] rounded-full bg-B400'></div>
            <div className='relative w-[32px] h-[32px] rounded-full bg-Y400'></div>
            <div className='relative w-[32px] h-[32px] rounded-full bg-G400'></div>
          </div>
        </div>

        <div>
          <div className='relative h-[24px] w-[126px] text-looseMedium text-B500'>SELECT SIZE</div>
          <div className='relative w-[232px] h-[40px] flex justify-between items-center'>
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

        <div className=' relative w-4/6 flex'>
          <Button className='w-[282px] h-[44px] justify-center items-center test-looseMedium bg-B900 text-W900'> Add to Cart</Button>
          <div className='w-[43px] h-[43px] flex justify-center items-center'>
            <Image src="/Whishlist.svg" width={24} height={24} alt='like' />
          </div>

          <div className='absolute h-[540px] pb-[50px] w-[436px] bg-W900 z-40 bottom-0 border border-W500 flex flex-col items-center justify-between'>
            <div className='flex px-[40px] bg-W100 text-B900 w-full h-[72px] justify-between items-center'>
              <span className='font-bold'>Shopping Cart</span>
              <Link href="">
                <Image src="/close.png" width={24} height={24} alt='Close' />
              </Link>
            </div>

            <div>
              <div className='border border-black w-full'>
                hello there
              </div>


              <div className=' w-[400px] pt-[10px] text h-[100px] px-[20px] flex flex-col items-center justify-between border-t border-w500 '>
                <div className='flex w-full justify-between items-center'>
                  <span>Total</span>
                  <span>$ 97.00</span>
                </div>

                <Button className='w-[352px] h-[40px] mt-[10px] text-W900 bg-B900 rounded'>View Cart</Button>

                <Link href="" className='mt-[10px] text-B500'>Checkout</Link>
              </div>



            </div>


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
