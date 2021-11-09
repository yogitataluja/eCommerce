import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (<>
    <Head>
    <title>Home</title>
    </Head>
    
    <div id="nt_content">
    <div className="kalles-section nt_section type_slideshow type_carousel kalles-cosmetics__main-slide">
    </div>
        {/*trending products section*/}
        <div className="kalles-section nt_section type_carousel type_featured_collection_owl tp_se_cdt">
          <div className="kalles-cosmetics__trending-products container">
            <div className="wrap_title des_title_7">
              <h3 className="section-title tc pr flex fl_center al_center fs__24 title_7">
                <span className="mr__10 ml__10">Now Trending</span></h3>
              <span className="dn tt_divider"><span /><i className="dn clprfalse la la-spa" /><span /></span><span className="section-subtitle db tc" />
            </div>
            <div className="products nt_products_holder row row_pr_1 cdt_des_1 round_cd_false js_carousel nt_slider nt_cover ratio_nt position_8 space_30 prev_next_3 btn_owl_1 dot_owl_1 dot_color_1 btn_vi_2" data-flickity="{&quot;imagesLoaded&quot;: 0,&quot;adaptiveHeight&quot;: 0, &quot;contain&quot;: 1, &quot;groupCells&quot;: &quot;100%&quot;, &quot;dragThreshold&quot; : 5, &quot;cellAlign&quot;: &quot;left&quot;,&quot;wrapAround&quot;: true,&quot;prevNextButtons&quot;: true,&quot;percentPosition&quot;: 1,&quot;pageDots&quot;: false, &quot;autoPlay&quot; : 0, &quot;pauseAutoPlayOnHover&quot; : true, &quot;rightToLeft&quot;: false }">
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
              </div>
              <div className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
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
              </div>
            </div>
          </div>
        </div>
        {/*end trending products section*/}
        {/*category banner */}
        <div className="kalles-section nt_section type_collection_list">
          <div className="kalles-cosmetics__category-banner container">
            <div className="wrap_title des_title_7">
              <h3 className="section-title tc pr flex fl_center al_center fs__24 title_7">
                <span className="mr__10 ml__10">Welcome to Potions of Paradise Natural Skincare</span></h3>
              <span className="dn tt_divider"><span /><i className="dn clprfalse la la-spa" /><span /></span><span className="section-subtitle db tc sub-title" />
            </div>
            <div className="mt__30 nt_cats_holder row equal_nt hoverz_true cat_size_4 cat_lay4_2 cat_lay5_1 cat_space_30 cat_design_1">
              <div className="col-md-6 col-12">
                <div className="row">
                  <div className="cat_grid_item cat_space_item cat_grid_item_1 col-12">
                    <div className="cat_grid_item__content pr oh">
                      <a href="shop-left-sidebar.html" className="db cat_grid_item__link">
                        <div className="cat_grid_item__overlay item__position nt_bg_lz lazyload center" data-bgset="assets/images/home-cosmetics/cat-banner-01.jpg" />
                      </a>
                      <div className="cat_grid_item__wrapper pe_none">
                        <div className="cat_grid_item__title">Makeup</div>
                      </div>
                    </div>
                  </div>
                  <div className="cat_grid_item cat_space_item cat_grid_item_3 col-12">
                    <div className="cat_grid_item__content pr oh">
                      <a href="shop-left-sidebar.html" className="db cat_grid_item__link">
                        <div className="cat_grid_item__overlay item__position nt_bg_lz lazyload center" data-bgset="assets/images/home-cosmetics/cat-banner-02.jpg" />
                      </a>
                      <div className="cat_grid_item__wrapper pe_none">
                        <div className="cat_grid_item__title">Skincare</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="row">
                  <div className="cat_grid_item cat_space_item cat_grid_item_2 col-12">
                    <div className="cat_grid_item__content pr oh">
                      <a href="shop-left-sidebar.html" className="db cat_grid_item__link">
                        <div className="cat_grid_item__overlay item__position nt_bg_lz lazyload center" data-bgset="assets/images/home-cosmetics/cat-banner-03.jpg" />
                      </a>
                      <div className="cat_grid_item__wrapper pe_none">
                        <div className="cat_grid_item__title">Bath &amp; Body</div>
                      </div>
                    </div>
                  </div>
                  <div className="cat_grid_item cat_space_item cat_grid_item_4 col-12">
                    <div className="cat_grid_item__content pr oh">
                      <a href="shop-left-sidebar.html" className="db cat_grid_item__link">
                        <div className="cat_grid_item__overlay item__position nt_bg_lz lazyload center" data-bgset="assets/images/home-cosmetics/cat-banner-04.jpg" />
                      </a>
                      <div className="cat_grid_item__wrapper pe_none">
                        <div className="cat_grid_item__title">Makeup Brushes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end category banner */}
        {/*new products section*/}
        <div className="kalles-section nt_section type_featured_collection tp_se_cdt">
          <div className="kalles-cosmetics__new-products container">
            <div className="wrap_title des_title_7">
              <h3 className="section-title tc pr flex fl_center al_center fs__24 title_7">
                <span className="mr__10 ml__10">New Arrivals</span></h3>
              <span className="dn tt_divider"><span /><i className="dn clprfalse la la-spa" /><span /></span><span className="section-subtitle db tc" />
            </div>
            <div className="products nt_products_holder row fl_center row_pr_1 cdt_des_5 round_cd_true nt_cover ratio_nt position_8 space_30">
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
              </div>
            </div>
          </div>
        </div>
        {/*end new products section*/}
        {/*instagram*/}
        <div className="kalles-section nt_section type_instagram_feed type_pin_owl bg-white">
          <div className="kalles-cosmetics__instagram nt_full pr ins_loaded">
            <div className="ins_shop_wrap row equal_nt ins_spaces_0 ins_rounded_0 nt_cover ratio1_1 position_8 se_instagram js_carousel nt_slider prev_next_0 btn_owl_1 dot_owl_1 dot_color_1 btn_vi_1" data-flickity="{&quot;imagesLoaded&quot;: 0,&quot;adaptiveHeight&quot;: 1, &quot;contain&quot;: 1, &quot;groupCells&quot;: &quot;100%&quot;, &quot;dragThreshold&quot; : 5, &quot;cellAlign&quot;: &quot;left&quot;,&quot;wrapAround&quot;: false,&quot;prevNextButtons&quot;: false,&quot;percentPosition&quot;: 1,&quot;pageDots&quot;: false, &quot;autoPlay&quot; : 0, &quot;pauseAutoPlayOnHover&quot; : true, &quot;rightToLeft&quot;: false }">
              <div className="pin__wr_js col_ins col-lg-2 col-md-3 col-6 item pr oh">
                <div className="wrap_ins_img db pr oh">
                  <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/home-cosmetics/intg-01.jpg" />
                </div>
              </div>
              <div className="pin__wr_js col_ins col-lg-2 col-md-3 col-6 item pr oh">
                <div className="wrap_ins_img db pr oh">
                  <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/home-cosmetics/intg-02.jpg" />
                </div>
              </div>
              <div className="pin__wr_js col_ins col-lg-2 col-md-3 col-6 item pr oh">
                <div className="wrap_ins_img db pr oh">
                  <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/home-cosmetics/intg-03.jpg" />
                </div>
              </div>
              <div className="pin__wr_js col_ins col-lg-2 col-md-3 col-6 item pr oh">
                <div className="wrap_ins_img db pr oh">
                  <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/home-cosmetics/intg-04.jpg" />
                </div>
              </div>
              <div className="pin__wr_js col_ins col-lg-2 col-md-3 col-6 item pr oh">
                <div className="wrap_ins_img db pr oh">
                  <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/home-cosmetics/intg-05.jpg" />
                </div>
              </div>
              <div className="pin__wr_js col_ins col-lg-2 col-md-3 col-6 item pr oh">
                <div className="wrap_ins_img db pr oh">
                  <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/home-cosmetics/intg-06.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end instagram*/}
      </div>
   
   </>
  )
}
