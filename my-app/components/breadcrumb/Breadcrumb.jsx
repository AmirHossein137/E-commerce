'use client'

import React from 'react'
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const Breadcrumb = ({ titleOne, titleTwo }) => {
    return (
        <div className="mb-5">
            <Breadcrumbs
                itemClasses={{ separator: "rotate-180" }}
            >
                <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                <BreadcrumbItem href="/">{titleOne}</BreadcrumbItem>
                {titleTwo && <BreadcrumbItem href="/">{titleTwo}</BreadcrumbItem>}

            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb