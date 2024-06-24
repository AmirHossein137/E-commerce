import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import CategoryFilter from '@/components/categoryFilter/CategoryFilter'
import React from 'react'

const CategoryItems = () => {
  return (
    <div className='mt-5'>
        <Breadcrumb titleOne={"گوشی سامسونگ"}/>
        <div className='grid grid-cols-12 gap-4 mt-4'>
            <div className='col-span-3'>
                <CategoryFilter />
            </div>
            <div className='col-span-9'></div>
        </div>
    </div>
  )
}

export default CategoryItems