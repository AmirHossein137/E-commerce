import React from 'react'
import TitleSection from '../titleSection/TitleSection'
import { Card, CardBody, Button, Link, Chip } from "@nextui-org/react";
import Image from 'next/image';
import HeadPhone from '../../public/images/headphone.jpg';


const Product2 = () => {
  return (
        <div className="mb-10">
            <TitleSection title={' هدفون ها در پیکودوز'} />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                    <Card>
                        <CardBody>
                            <Link href='/' className="mb-3">
                                <Image className="rounded-2xl object-contain" src={HeadPhone} />
                            </Link>
                            <Link href='/' className="text-center mb-3">
                                <span className="text-sm font-medium text-gray-700">گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت</span>
                            </Link>
                            <div className='flex items-center justify-around mb-3'>
                                <Chip className="bg-rose-600 text-sm font-bold text-white">4%</Chip>
                                <div className="flex flex-col items-center">
                                    <del className="text-gray-500">1,500,00 تومان</del>
                                    <span className="text-lg font-bold text-slate-700">1,200,000 تومان</span>
                                </div>
                            </div>
                            <div>
                                <Button className="w-full font-bold">
                                    افزودن به سبد خرید
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-span-3">
                    <Card>
                        <CardBody>
                            <Link href='/' className="mb-3">
                                <Image className="rounded-2xl object-contain" src={HeadPhone} />
                            </Link>
                            <Link href='/' className="text-center mb-3">
                                <span className="text-sm font-medium text-gray-700">گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت</span>
                            </Link>
                            <div className='flex items-center justify-around mb-3'>
                                <Chip className="bg-rose-600 text-sm font-bold text-white">4%</Chip>
                                <div className="flex flex-col items-center">
                                    <del className="text-gray-500">1,500,00 تومان</del>
                                    <span className="text-lg font-bold text-slate-700">1,200,000 تومان</span>
                                </div>
                            </div>
                            <div>
                                <Button className="w-full font-bold">
                                    افزودن به سبد خرید
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-span-3">
                    <Card>
                        <CardBody>
                            <Link href='/' className="mb-3">
                                <Image className="rounded-2xl object-contain" src={HeadPhone} />
                            </Link>
                            <Link href='/' className="text-center mb-3">
                                <span className="text-sm font-medium text-gray-700">گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت</span>
                            </Link>
                            <div className='flex items-center justify-around mb-3'>
                                <Chip className="bg-rose-600 text-sm font-bold text-white">4%</Chip>
                                <div className="flex flex-col items-center">
                                    <del className="text-gray-500">1,500,00 تومان</del>
                                    <span className="text-lg font-bold text-slate-700">1,200,000 تومان</span>
                                </div>
                            </div>
                            <div>
                                <Button className="w-full font-bold">
                                    افزودن به سبد خرید
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-span-3">
                    <Card>
                        <CardBody>
                            <Link href='/' className="mb-3">
                                <Image className="rounded-2xl object-contain" src={HeadPhone} />
                            </Link>
                            <Link href='/' className="text-center mb-3">
                                <span className="text-sm font-medium text-gray-700">گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت</span>
                            </Link>
                            <div className='flex items-center justify-around mb-3'>
                                <Chip className="bg-rose-600 text-sm font-bold text-white">4%</Chip>
                                <div className="flex flex-col items-center">
                                    <del className="text-gray-500">1,500,00 تومان</del>
                                    <span className="text-lg font-bold text-slate-700">1,200,000 تومان</span>
                                </div>
                            </div>
                            <div>
                                <Button className="w-full font-bold">
                                    افزودن به سبد خرید
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
  )
}

export default Product2