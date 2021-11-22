import {useState, useEffect} from 'react'
import axios from "axios";
import { useRouter } from 'next/router'
import {API} from "../API"

const ShopBanner = ({products}) => {
    
  
    return (
        <>
        {/* <!--shop banner--> */}
        <div className="kalles-section page_section_heading">
            <div className="page-head tc pr oh cat_bg_img page_head_">
                <div className="parallax-inner nt_parallax_false lazyload nt_bg_lz pa t__0 l__0 r__0 b__0" data-bgset="/assets/images/shop/shop-banner.jpg"></div>
                <div className="container pr z_100">
                    <h1 className="mb__5 cw">Makeup</h1>
                    <p className="mg__0">Shop through our latest selection of color cosmetics</p>
                </div>
            </div>
        </div>
        {/* <!--end shop banner--> */}
        </>
    )
}

export default ShopBanner
