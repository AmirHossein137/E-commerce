'use client'

import React, { useState } from 'react'
import { Filter } from 'lucide-react';
import { Accordion, AccordionItem, Input, Checkbox } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";

const CategoryFilter = () => {

    const [sliderValue, setSliderValue] = useState([100000, 2000000])
    const [val, setVal] = useState('مشکی')

    const handleSubmit = (e) => {
        console.log(val)
    }

    return (
        <div className='border border-gray-200 rounded-lg'>
            <div className='flex items-center gap-2 border-b p-4 border-gray-200 mb-2'>
                <Filter width={17} className='text-gray-700' />
                <span className='text-gray-700 font-medium'>فیلترها</span>
            </div>
            <div className='flex flex-col p-2'>
                <Accordion>
                    <AccordionItem key="1" aria-label="Accordion 1" title="محدوده قیمت">
                        <div className='flex flex-col'>
                            <Slider
                                step={50}
                                minValue={0}
                                maxValue={10000000}
                                value={sliderValue}
                                formatOptions={{ style: "currency", currency: "USD" }}
                                className="overflow-y-hidden mb-1"
                                onChange={setSliderValue}
                                classNames={{ base: 'overflow-hidden', filler: 'bg-rose-500', thumb: 'bg-rose-500' }}
                            />
                            <span className='text-xs mb-1'>محدوده قیمت از</span>
                            <div className='flex items-center gap-2 p-2 border border-gray-300 rounded-lg mb-2'>
                                <Input
                                    type="email"
                                    className='flex-1'
                                    classNames={{ inputWrapper: 'p-0', input: "bg-white px-3" }}
                                    value={sliderValue[0]}
                                />
                                <span>تومان</span>
                            </div>
                            <span className='text-xs mb-1'>محدوده قیمت تا</span>
                            <div className='flex items-center gap-2 p-2 border border-gray-300 rounded-lg mb-2'>
                                <Input
                                    type="email"
                                    className='flex-1'
                                    classNames={{ inputWrapper: 'p-0', input: "bg-white px-3" }}
                                    value={sliderValue[1]}
                                />
                                <span>تومان</span>
                            </div>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="رنگ">
                        <div className='flex flex-col gap-2'>
                            <Checkbox value={val} onChange={handleSubmit} classNames={{ label: "pr-2" }} color='danger' size="md">مشکی</Checkbox>
                            <Checkbox value={val} onChange={handleSubmit} classNames={{ label: "pr-2" }} color='danger' size="md">سبز</Checkbox>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default CategoryFilter