import React from 'react'
import {Link} from "@nextui-org/react";

const TitleSection = ({title}) => {
  return (
    <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-5">
        <span className="text-2xl text-slate-700 font-bold">{title}</span>
        <div className="flex items-center gap-3">
            <Link showAnchorIcon href="#" color="primary">مشاهده همه</Link>
        </div>
    </div>
  )
}

export default TitleSection