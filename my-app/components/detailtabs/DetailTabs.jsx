'use client'

import React from 'react'
import { Tabs, Tab } from "@nextui-org/react";
import { ReceiptText, MessageCircle } from 'lucide-react';
import DetailItem from '../detalItem/DetailItem';
import Comment from '../comment/Comment';

const DetailTabs = () => {
    return (

        <div className="flex w-full flex-col mb-96">
            <Tabs
                aria-label="Options"
                classNames={
                    {
                        tabList: "w-full",
                        tab: "h-11",
                        cursor: "bg-rose-400 text-white dark:bg-rose-400 py-3",
                        tabContent: "group-data-[selected=true]:text-white group-data-[selected=true]:font-bold",
                    }}
            >
                <Tab key="مشخصات فنی" title="مشخصات فنی">
                    <div className="flex flex-col gap-5 mt-5">
                        <div className="flex items-center gap-3 mb-4">
                            <ReceiptText className="text-gray-800" />
                            <span className="text-2xl font-bold text-gray-800">مشخصات کلی محصول :</span>
                        </div>
                        <DetailItem />
                    </div>
                </Tab>
                <Tab key="نظرات کاربران" title="نظرات کاربران">
                    <div className="flex flex-col gap-5 mt-5">
                        <div className="flex items-center gap-3 mb-4">
                            <MessageCircle className="text-gray-800" />
                            <span className="text-2xl font-bold text-gray-800">نظرات کاربران :</span>
                        </div>
                        <div>
                            <Comment />
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default DetailTabs