import React from 'react'
import { Cpu, MemoryStick, Smartphone, SmartphoneCharging } from 'lucide-react';

const DetailProduct = () => {
    return (
        <div className="flex flex-col gap-3">
            <span className="text-sm text-rose-500 font-bold">ویژگی های اصلی محصول</span>
            <div className="border flex flex-col gap-3 rounded-lg border-gray-100 shadow shadow-gray-200 p-4">
                <div className="flex bg-gray-200 rounded-lg p-3 items-center gap-3">
                    <Cpu className="text-gray-500" width={17} />
                    <span className="text-gray-500 text-xs">نوع پردازنده - CPU :</span>
                    <span className="text-gray-700 font-bold text-sm">Apple A15 Bionic (5 نانومتر)</span>
                </div>
                <div className="flex bg-gray-100 rounded-lg p-3 items-center gap-3">
                    <MemoryStick className="text-gray-500" width={17} />
                    <span className="text-gray-500 text-xs">حافظه داخلی :</span>
                    <span className="text-gray-700 font-bold text-sm">128 گیگابایت</span>
                </div>
                <div className="flex bg-gray-200 rounded-lg p-3 items-center gap-3">
                    <MemoryStick className="text-gray-500" width={17} />
                    <span className="text-gray-500 text-xs">حافظه RAM :</span>
                    <span className="text-gray-700 font-bold text-sm">4 گیگابایت</span>
                </div>
                <div className="flex bg-gray-100 rounded-lg p-3 items-center gap-3">
                    <Smartphone className="text-gray-500" width={17} />
                    <span className="text-gray-500 text-xs">سایز صفحه نمایش :</span>
                    <span className="text-gray-700 font-bold text-sm">6.1 اینچ</span>
                </div>
                <div className="flex bg-gray-200 rounded-lg p-3 items-center gap-3">
                    <SmartphoneCharging className="text-gray-500" width={17} />
                    <span className="text-gray-500 text-xs">ظرفیت باتری :</span>
                    <span className="text-gray-700 font-bold text-sm">3240 میلی‌ آمپر ساعت</span>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct