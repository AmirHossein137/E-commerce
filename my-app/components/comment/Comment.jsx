import React from 'react'
import CommentModal from '../commentModal/CommentModal';
import { Avatar } from "@nextui-org/react";

const Comment = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="shadow-md p-5 rounded-lg flex items-center justify-between mb-5">
                <span className="text-gray-700">درصورت ثبت دیدگاهتان برای این محصول بر روی دکمه افزودن نظر کلیک کنید</span>
                <CommentModal />
            </div>
            <div className="flex flex-col gap-2">
                <div className="shadow rounded-2xllg p-4">
                    <div className="flex items-center gap-3 mb-3">
                        <div>
                            <Avatar name="Junior" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-gray-800">امیرحسین</span>
                            <span className="text-sm text-gray-400">1403/04/05</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;