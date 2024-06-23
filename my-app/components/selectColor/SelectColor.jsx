'use client'

import React from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from '@/data/data';

const SelectColor = () => {
    return (
        <div>
            <Select
                label='رنگ مورد نظر خود را انتخاب کنید'
                placeholder="انتخاب رنگ"
                className="max-w-sm"
                classNames={{ value: "flex text-gray-400 pt-2" , label : "-right-4 text-black font-bold", selectorIcon: "right-[93%]" , trigger : "h-16" }}
            >
                {animals.map((animal) => (
                    <SelectItem key={animal.key}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}

export default SelectColor