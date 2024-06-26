import React from 'react'
import { Trash2, Plus, Minus, CircleX } from 'lucide-react';
import Mob from "../../public/images/Iphone.jpg";
import Image from 'next/image';
import { Button } from '@nextui-org/button';

const Cart = () => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-6 mt-10'>
        <div className='col-span-9'>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span className='text-gray-800 font-bold text-lg'>سبد خرید شما</span>
                <span className='text-sm text-gray-400'>1 عدد کالا</span>
              </div>
              <div className='flex items-center gap-1 text-gray-500 text-sm cursor-pointer'>
                <Trash2 width={15} />
                <span>حذف کل سبد خرید شما</span>
              </div>
            </div>
            <div className='border border-gray-200 p-5 rounded-md flex flex-col'>
              <div className='border-b border-gray-200 pb-7 flex items-center relative'>
                <div className='flex items-center gap-6'>
                  <div>
                    <Image src={Mob} alt='s' className='w-56 h-56 object-cover rounded-md' />
                  </div>
                  <div className='flex flex-col gap-5'>
                    <span className='font-bold text-gray-700'>گوشی موبایل سامسونگ مدل Galaxy A15 4G ظرفیت 128 گیگابایت رم 4 گیگابایت - ویتنام</span>
                    <div className='flex items-center gap-1'>
                      <span className='text-gray-800 font-medium text-lg'>رنگ :</span>
                      <span className='text-gray-500'>سبز</span>
                    </div>
                    <div className='flex items-center justify-between gap-6 border w-52 shadow-sm p-3 rounded-lg'>
                      <button>
                        <Plus className='text-rose-500' />
                      </button>
                      <span className='text-lg text-gray-500'>1</span>
                      <button>
                        <Minus className='text-rose-500' />
                      </button>
                    </div>
                    <div>
                      <span className='text-lg font-bold text-slate-900'>1,200,000 تومان</span>
                    </div>
                  </div>
                </div>
                <div className='absolute left-0 top-0 text-gray-400 hover:text-rose-600 transition duration-300 cursor-pointer'>
                  <CircleX />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <div className='flex flex-col gap-4 shadow-md p-6 rounded-lg'>
            <div className='flex items-center justify-between'>
              <span className='text-gray-500'>جمع کل :</span>
              <span className='text-gray-800 font-bold'>1,200,000 تومان</span>
            </div>
            <Button size='lg' className='bg-rose-500 text-white'>ادامه خرید</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart