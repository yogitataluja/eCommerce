import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { API } from "../API";
const TrendPrdct = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    const res = await axios.get(`${API}/api/product/getLatestSold`);
    setProducts(res.data.data);
  }

  return (
    <>
      <div className="container" style={{ marginTop: "45px" }}>
        {/*trending products section*/}
        <div className="kalles-section nt_section type_carousel type_featured_collection_owl tp_se_cdt">
          <div className="kalles-cosmetics__trending-products container">
            <div className="wrap_title des_title_7">
              <h3 className="section-title tc pr flex fl_center al_center fs__24 title_7">
                <span className="mr__10 ml__10" style={{ color: "#81BF33" }}>
                  Now Trending
                </span>
              </h3>
              <span className="dn tt_divider">
                <span />
                <i className="dn clprfalse la la-spa" />
                <span />
              </span>
              <span className="section-subtitle db tc" />
            </div>
            <div
              className="products nt_products_holder row row_pr_1 cdt_des_1 round_cd_false js_carousel nt_slider nt_cover ratio_nt position_8 space_30 prev_next_3 btn_owl_1 dot_owl_1 dot_color_1 btn_vi_2"
              data-flickity='{"imagesLoaded": 0,"adaptiveHeight": 0, "contain": 1, "groupCells": "100%", "dragThreshold" : 5, "cellAlign": "left","wrapAround": true,"prevNextButtons": true,"percentPosition": 1,"pageDots": false, "autoPlay" : 0, "pauseAutoPlayOnHover" : true, "rightToLeft": false }'
              style={{ marginBottom: "20px" }}
            >
              {products?.slice(0, 4).map((i, index) => (
                <div
                  className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"
                  key={index}
                >
                  <div className="product-inner pr">
                    <div className="product-image pr oh lazyload">
                      <span className="tc nt_labels pa pe_none cw">
                        <span className="nt_label new">New</span>
                      </span>
                      <a className="db" href={`/productdetails/${i._id}`}>
                        <div
                          className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                          data-bgset={i?.featuredImage}
                          style={{ height: 320, width: 265 }}
                        />
                      </a>
                      <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                        <div
                          className="pr_lazy_img back-img pa nt_bg_lz lazyload"
                          data-bgset={i?.featuredImage}
                          style={{ height: 320, width: 265 }}
                        />
                      </div>
                      <div className="nt_add_w ts__03 pa">
                        <a
                          href="#"
                          className="wishlistadd cb chp ttip_nt tooltip_right"
                        >
                          <span className="tt_txt">Add to Wishlist</span>
                          <i className="facl facl-heart-o" />
                        </a>
                      </div>
                      {/* <div className="hover_button op__0 tc pa flex column ts__03">
                      <a href="#" className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                        <span className="tt_txt">Add to cart</span><i className="iccl iccl-cart" /><span>Add to cart</span>
                      </a>
                    </div> */}
                    </div>
                    <div className="product-info mt__15">
                      <h3 className="product-title pr fs__14 mg__0 fwm">
                        <a className="cd chp" href="product-detail.html">
                          {i?.title}
                        </a>
                      </h3>

                      <span className="price dib mb__5">
                        <del>
                          <span className="money">{i?.price}</span>
                        </del>
                        <ins>
                          <span className="money">{i?.sale_price}</span>
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-05.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-06.jpg" />
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
                      <a className="cd chp" href="product-detail.html">Skin Fit Glow Cushion</a>
                    </h3>
                    <span className="price dib mb__5"><span className="money">Rs. 49.00</span> </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <span className="tc nt_labels pa pe_none cw">
                      <span className="onsale nt_label"><span>-34%</span></span>
                    </span>
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-15.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload" data-bgset="assets/images/home-cosmetics/pr-16.jpg" />
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
                      <a className="cd chp" href="product-detail.html">White Dew Milky Cleanser</a>
                    </h3>
                    <span className="price dib mb__5">
                      <del><span className="money">Rs. 98.00</span></del>
                      <ins><span className="money">Rs. 65.00</span></ins>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-17.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload" data-bgset="assets/images/home-cosmetics/pr-18.jpg" />
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
                      <a className="cd chp" href="product-detail.html">Water Bank Hydro Essence</a>
                    </h3>
                    <span className="price dib mb__5"><span className="money">Rs. 65.00</span> </span>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div className="product-inner pr">
                  <div className="product-image pr oh lazyload">
                    <a className="db" href="product-detail.html">
                      <div className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100" data-bgset="assets/images/home-cosmetics/pr-19.jpg" />
                    </a>
                    <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                      <div className="pr_lazy_img back-img pa nt_bg_lz lazyload" data-bgset="assets/images/home-cosmetics/pr-20.jpg" />
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
                      <a className="cd chp" href="product-detail.html">My Foundation All Day Long Wear</a>
                    </h3>
                    <span className="price dib mb__5"><span className="money">Rs. 45.00</span> </span>
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
              </div> */}
            </div>
          </div>
        </div>
        {/*end trending products section*/}
      </div>
    </>
  );
};

export default TrendPrdct;
