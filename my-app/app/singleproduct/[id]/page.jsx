import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import SelectColor from '@/components/selectColor/SelectColor';
import React from 'react'
import ProductImg from "../../../public/images/Iphone.jpg";
import Image from 'next/image';
import DetailProduct from '@/components/detailproduct/DetailProduct';
import { Settings, Send, ShieldCheck } from 'lucide-react';
import { Button } from '@nextui-org/button';
import DetailTabs from '@/components/detailtabs/DetailTabs';

const SingleProduct = () => {
  return (
    <div className="mt-5">
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-5 mb-10">
        <div className="col-span-9">
          <div className="border flex gap-3 shadow-md border-gray-100 rounded-xl p-5 mb-10">
            <div className="w-[60%]">
              <div className="flex flex-col gap-3 mb-4">
                <span className="text-lg text-right font-bold text-gray-800">گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت</span>
                <span className="text-sm text-gray-400">Apple iPhone 13 CH/A 128/4GB - Not Active</span>
              </div>
              <div className="mb-6">
                <SelectColor />
              </div>
              <div>
                <DetailProduct />
              </div>
            </div>
            <div className="w-[40%]">
              <div className="h-full">
                <Image className="rounded-xl h-full object-cover" src={ProductImg} />
              </div>
            </div>
          </div>
          <div>
            <DetailTabs />
          </div>
        </div>
        <div className="col-span-3">
          <div className="border shadow-md border-gray-100 rounded-xl flex flex-col gap-3 p-3">
            <div className="p-4 flex flex-col gap-3 bg-slate-100 rounded-lg mb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Settings width={15} />
                  <span className="text-xs text-gray-500">ارزیابی عملکرد:</span>
                </div>
                <span className="text=sm text-green-500 font-medium">عالی</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Send width={15} />
                  <span className="text-xs text-gray-500"> ارسال:</span>
                </div>
                <span className="text=sm text-blue-500 font-medium">امروز</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck width={15} />
                  <span className="text-xs text-gray-500">18 ماه گارانتی شرکتی</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around mb-3">
              <del className="text-rose-600 text-sm font-bold">1,500,000 تومان</del>
              <span className="text-gray-700 font-bold">1,200,000 تومان</span>
            </div>
            <Button className="bg-green-600 text-white font-bold" size='lg'>
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleProduct;