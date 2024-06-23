'use client'

import BannerSlider from "@/components/bannerSlider/BannerSlider";
import Product from "@/components/product/Product";
import Product1 from "@/components/product/Product1";
import Product2 from "@/components/product/Product2";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <Product />
      <Product1 />
      <Product2 />
    </div>
  )
}
