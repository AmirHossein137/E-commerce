import React from 'react'

const DetailItem = () => {
    return (
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6 gap-1 flex flex-col p-5 rounded-lg shadow-rose-50 bg-rose-50">
                <span className="text-slate-900">نوع پردازنده - CPU :</span>
                <span className="text-sm text-gray-400 font-medium">Apple A15 Bionic (5 نانومتر)</span>
            </div>
            <div className="col-span-6 gap-1 flex flex-col p-5 rounded-lg shadow-rose-50 bg-rose-50">
                <span className="text-slate-900">فرکانس پردازنده مرکزی :</span>
                <span className="text-sm text-gray-400 font-medium">2 هسته 3.23 گیگاهرتز Avalanche و 4 هسته 1.82 گیگاهرتز Blizzard</span>
            </div>
            <div className="col-span-6 gap-1 flex flex-col p-5 rounded-lg shadow-rose-50 bg-rose-50">
                <span className="text-slate-900">تعداد هسته پردازشگر :</span>
                <span className="text-sm text-gray-400 font-medium">شش هسته</span>
            </div>
            <div className="col-span-6 gap-1 flex flex-col p-5 rounded-lg shadow-rose-50 bg-rose-50">
                <span className="text-slate-900">تعداد سیم کارت :</span>
                <span className="text-sm text-gray-400 font-medium">دو سیم کارت نانو سیم (همزمان فعال)</span>
            </div>
            <div className="col-span-6 gap-1 flex flex-col p-5 rounded-lg shadow-rose-50 bg-rose-50">
                <span className="text-slate-900">پردازنده گرافیکی - GPU :</span>
                <span className="text-sm text-gray-400 font-medium">Apple GPU (4-Core Graphics)</span>
            </div>
            <div className="col-span-6 gap-1 flex flex-col p-5 rounded-lg shadow-rose-50 bg-rose-50">
                <span className="text-slate-900">کیفیت دوربین :</span>
                <span className="text-sm text-gray-400 font-medium">دوگانه 12 مگاپیکسل + 12 مگاپیکسل</span>
            </div>
            <div className="col-span-6 gap-1 flex flex-col p-5 rounded-lg shadow-rose-50 bg-rose-50">
                <span className="text-slate-900">سیستم عامل :</span>
                <span className="text-sm text-gray-400 font-medium">iOS 15</span>
            </div>
            <div className="col-span-6 gap-1 flex flex-col p-5 rounded-lg shadow-rose-50 bg-rose-50">
                <span className="text-slate-900">نوع صفحه نمایش :</span>
                <span className="text-sm text-gray-400 font-medium">Super Retina XDR OLED</span>
            </div>
        </div>
    )
}

export default DetailItem