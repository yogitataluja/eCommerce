import React from 'react'
import Pdata from "./Pdata"
import {API} from "../API"
import axios from "axios";
import { useRouter } from "next/router";

const CategoryFilter = ({setProducts,isCategory}) => {
const router = useRouter()
  const {categoryId, subcatId }= router.query


    const handleCheckBox =  async (min, max)=>{
        if(!isCategory)
       {
          const res = await axios.post(`${API}/api/product/applyFilter/${categoryId}/${subcatId}`,{lowValue:min, highValue:max});
         setProducts(res.data.product)
         }
         else
         {
          const res = await axios.post(`${API}/api/product/applyFilter/${categoryId}`,{lowValue:min, highValue:max});
          setProducts(res.data.product)
         }
    
      }
    return (
        <>
          {/* <!--left sidebar--> */}
          <div className="js_sidebar sidebar sidebar_nt col-lg-3 col-12 space_30 hidden_false lazyload">
      <div
        id="kalles-section-sidebar_shop"
        className="kalles-section nt_ajaxFilter section_sidebar_shop type_instagram"
      >
        <div className="h3 mg__0 tu bgb cw visible-sm fs__16 pr">
          Sidebar<i className="close_pp pegk pe-7s-close fs__40 ml__5"></i>
        </div>
        <div className="cat_shop_wrap">
          <div className="cat_fixcl-scroll">
            <div className="cat_fixcl-scroll-content css_ntbar">
              <div className="row no-gutters wrap_filter">
                <div className="col-12 col-md-12 widget widget_product_categories cat_count_false">
                  <div className="col-12 col-md-12 widget">
                    <h5 className="widget-title">Filter by price</h5>
                    <div className="loke_scroll">
                      <ul className="nt_filter_block nt_filter_styleck css_ntbar">
                         
                      {Pdata.map((item, index)=>
                        <li key={index} style={{display:"flex", alignItems:"center", textAlign:"left"}}>
                          <input type="radio" id={item._id} name="50-100" value={item._id}
                            aria-label="Narrow selection to products matching tag price Rs. 50-Rs. 100" onChange={e => handleCheckBox(item.min, item.max)} style={{border:"none", textDecoration:"none"}}
                          />
                          <label htmlFor={item._id} style={{paddingLeft:"13px" , color:"black" , "hover":{color: "#efefef"}}}> {item.text===undefined ?<> Rs. {item.min}- {item.max!=undefined ?<>Rs. {item.max}</>:<>above</>}</>:<>{item.text}</>}</label>
                        </li>
                      )}

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                {/* <!--end left sidebar--> */}  
        </>
    )
}

export default CategoryFilter
