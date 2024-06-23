'use client'

import React from 'react'
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const Breadcrumb = () => {
    return (
        <div className="mb-5">
            <Breadcrumbs
            itemClasses={{ separator : "rotate-180" }}
            >
                <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                <BreadcrumbItem href="/">موبایل</BreadcrumbItem>
                <BreadcrumbItem href="/">اپل</BreadcrumbItem>
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb