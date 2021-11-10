import React from 'react'
import axios from "axios";
import {useState, useEffect} from "react"
import {API} from "../API"

const NewProducts = () => {
    let [newArrival, setnewArrival] = useState([]);
useEffect(()=>{
    getnewArrival()
},[])
    async function getnewArrival() {
        let product = await axios.get(`${API}/api/product/new`);
        setnewArrival(product?.data.latest);
      }
    return (
        <div className="container" style={{marginBottom:"20px", marginTop:"20px"}}>
            {/*new products section*/}
        <div className="kalles-section nt_section type_featured_collection tp_se_cdt">
          <div className="kalles-cosmetics__new-products container">
            <div className="wrap_title des_title_7">
              <h3 className="section-title tc pr flex fl_center al_center fs__24 title_7">
                <span className="mr__10 ml__10" style={{color:"#81BF33"}}>New Arrivals</span></h3>
              <span className="dn tt_divider"><span /><i className="dn clprfalse la la-spa" /><span /></span><span className="section-subtitle db tc" />
            </div>
            <div className="products nt_products_holder row fl_center row_pr_1 cdt_des_5 round_cd_true nt_cover ratio_nt position_8 space_30">
            {newArrival?.map((product, index) => {
              return (
                <div
                style={{display:'flex',justifyContent:'center'}}
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"
                >
                  <div className="product-inner pr">
                    <div className="product-image pr oh lazyload">
                      {/* <span className="tc nt_labels pa pe_none cw">
                        <span className="onsale nt_label">
                          <span>-34%</span>
                        </span>
                      </span> */}
                      <a className="db" href={`/productDetails/${product._id}`}>
                        <div
                        style={{width:265,height:320}}
                          className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                          data-bgset={product.featuredImage}

                        ></div>
                      </a>

                      {/* <Wishlist id={product._id} /> */}
                      {/* <div className="hover_button op__0 tc pa flex column ts__03">
                        <a
                          onClick={() => addCart(product._id)}
                          href="#"
                          className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left"
                        >
                          <span className="tt_txt">Add to cart</span>
                          <i className="iccl iccl-cart"></i>
                          <span>Add to cart</span>
                        </a>
                      </div> */}
                    </div>
                    <div className="product-info mt__15">
                      <h3 className="product-title pr fs__14 mg__0 fwm">
                        <a
                          className="cd chp"
                          href={`/productDetails/${product._id}`}
                        >
                          {product.title}
                        </a>
                      </h3>
                      <span className="price dib mb__5">
                        <del>
                          <span className="money">{product.price}</span>
                        </del>
                        <ins>
                          <span className="money">{product.sale_price}</span>
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

              {/* <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-11.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-12.jpg" />
                    </div>
                    <div className="nt_add_w ts__03 pa">
                      <a href="#" className="wishlistadd cb chp ttip_nt tooltip_right">
                        <span className="tt_txt">Add to Wishlist</span><i className="facl facl-heart-o" />
                      </a>
                    </div>
                    <div className="hover_button op__0 tc pa flex column ts__03">
                      <a href="#" className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                        <span className="tt_txt">Add to cart</span><i className="iccl iccl-cart" /><span>Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div className="product-info mt__15">
                    <h3 className="product-title pr fs__14 mg__0 fwm">
                      <a className="cd chp" href="product-detail.html">Fresh Calming Balancing Toner</a>
                    </h3>
                    <span className="price dib mb__5"><span className="money">Rs. 49.00</span> </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-21.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-14.jpg" />
                    </div>
                    <div className="nt_add_w ts__03 pa">
                      <a href="#" className="wishlistadd cb chp ttip_nt tooltip_right">
                        <span className="tt_txt">Add to Wishlist</span><i className="facl facl-heart-o" />
                      </a>
                    </div>
                    <div className="hover_button op__0 tc pa flex column ts__03">
                      <a href="#" className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                        <span className="tt_txt">Add to cart</span><i className="iccl iccl-cart" /><span>Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div className="product-info mt__15">
                    <h3 className="product-title pr fs__14 mg__0 fwm">
                      <a className="cd chp" href="product-detail.html">Advanced Hydrating Conditioner</a>
                    </h3>
                    <span className="price dib mb__5"><span className="money">Rs. 28.00</span> </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <span className="tc nt_labels pa pe_none cw"><span className="nt_label new">New</span></span>
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-13.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload" data-bgset="assets/images/home-cosmetics/pr-14.jpg" />
                    </div>
                    <div className="nt_add_w ts__03 pa">
                      <a href="#" className="wishlistadd cb chp ttip_nt tooltip_right">
                        <span className="tt_txt">Add to Wishlist</span><i className="facl facl-heart-o" />
                      </a>
                    </div>
                    <div className="hover_button op__0 tc pa flex column ts__03">
                      <a href="#" className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                        <span className="tt_txt">Add to cart</span><i className="iccl iccl-cart" /><span>Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div className="product-info mt__15">
                    <h3 className="product-title pr fs__14 mg__0 fwm">
                      <a className="cd chp" href="product-detail.html">Skin Medical HA5</a></h3>
                    <span className="price dib mb__5"><span className="money">Rs. 29.00</span> </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <span className="tc nt_labels pa pe_none cw"><span className="nt_label hot">Hot</span></span>
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-01.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-02.jpg" />
                    </div>
                    <div className="nt_add_w ts__03 pa">
                      <a href="#" className="wishlistadd cb chp ttip_nt tooltip_right">
                        <span className="tt_txt">Add to Wishlist</span><i className="facl facl-heart-o" />
                      </a>
                    </div>
                    <div className="hover_button op__0 tc pa flex column ts__03">
                      <a href="#" className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                        <span className="tt_txt">Add to cart</span><i className="iccl iccl-cart" /><span>Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div className="product-info mt__15">
                    <h3 className="product-title pr fs__14 mg__0 fwm">
                      <a className="cd chp" href="product-detail.html">Laneige White Dew Emulsion</a>
                    </h3>
                    <span className="price dib mb__5"><span className="money">Rs. 55.00</span> </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-07.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-08.jpg" />
                    </div>
                    <div className="nt_add_w ts__03 pa">
                      <a href="#" className="wishlistadd cb chp ttip_nt tooltip_right">
                        <span className="tt_txt">Add to Wishlist</span><i className="facl facl-heart-o" />
                      </a>
                    </div>
                    <div className="hover_button op__0 tc pa flex column ts__03">
                      <a href="#" className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                        <span className="tt_txt">Add to cart</span><i className="iccl iccl-cart" /><span>Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div className="product-info mt__15">
                    <h3 className="product-title pr fs__14 mg__0 fwm">
                      <a className="cd chp" href="product-detail.html">Dr.Jart Sensitive Sun Protector</a>
                    </h3>
                    <span className="price dib mb__5"><span className="money">Rs. 35.00</span> </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-04.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-20.jpg" />
                    </div>
                    <div className="nt_add_w ts__03 pa">
                      <a href="#" className="wishlistadd cb chp ttip_nt tooltip_right">
                        <span className="tt_txt">Add to Wishlist</span><i className="facl facl-heart-o" />
                      </a>
                    </div>
                    <div className="hover_button op__0 tc pa flex column ts__03">
                      <a href="#" className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                        <span className="tt_txt">Add to cart</span><i className="iccl iccl-cart" /><span>Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div className="product-info mt__15">
                    <h3 className="product-title pr fs__14 mg__0 fwm">
                      <a className="cd chp" href="product-detail.html">Les Beiges Water Fresh Tint Light</a>
                    </h3>
                    <span className="price dib mb__5"><span className="money">Rs. 38.00</span> </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-14.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-21.jpg" />
                    </div>
                    <div className="nt_add_w ts__03 pa">
                      <a href="#" className="wishlistadd cb chp ttip_nt tooltip_right">
                        <span className="tt_txt">Add to Wishlist</span><i className="facl facl-heart-o" />
                      </a>
                    </div>
                    <div className="hover_button op__0 tc pa flex column ts__03">
                      <a href="#" className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                        <span className="tt_txt">Add to cart</span><i className="iccl iccl-cart" /><span>Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div className="product-info mt__15">
                    <h3 className="product-title pr fs__14 mg__0 fwm">
                      <a className="cd chp" href="product-detail.html">Advanced Hydrating Shampoo</a>
                    </h3>
                    <span className="price dib mb__5"><span className="money">Rs. 32.00</span> </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/*end new products section*/} 
        </div>
    )
}

export default NewProducts
