
const ShopAllProduct = ({products}) => {
    
    return (
        <>
            {/* <!--main content--> */}
            <div className="col-lg-9 col-12">
              <div className="kalles-section tp_se_cdt">
                {/* <!--products list--> */}
                <div className="on_list_view_false products nt_products_holder row fl_center row_pr_1 cdt_des_1 round_cd_false nt_cover ratio_nt position_8 space_30 nt_default">
                  {products != null ? (
                    <>
                      {products.length > 0 ? (
                        products.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"
                            >
                              <div className="product-inner pr">
                                <div className="product-image pr oh lazyload">
                                  <span className="tc nt_labels pa pe_none cw">
                                    <span className="nt_label new">New</span>
                                  </span>
                                  <a
                                    className="d-block"
                                    href={`productdetails/${item._id}`}
                                  >
                                    <div
                                      className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__127_571"
                                      data-bgset={item.featuredImage}
                                    ></div>
                                  </a>
                                  <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                                    <div
                                      className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__127_571"
                                      data-bgset={item.featuredImage}
                                    ></div>
                                  </div>
                                  {/* <Wishlist id={item._id} /> */}
                                  {/* <div className="hover_button op__0 tc pa flex column ts__03"> */}
                                  {/* <a
                                className="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                                href="#"
                              >
                                <span className="tt_txt">Quick view</span>
                                <i className="iccl iccl-eye"></i>
                                <span>Quick view</span>
                              </a> */}
                                  {/* <a
                                href="#"
                                className="pr pr_atc cd br__40 bgw tc dib js__qs cb chp ttip_nt tooltip_top_left"
                              >
                                <span className="tt_txt">Quick Shop</span>
                                <i className="iccl iccl-cart"></i>
                                <span>Quick Shop</span>
                              </a>
                            </div> */}
                                </div>
                                <div className="product-info mt__15">
                                  <h3 className="product-title pr fs__14 mg__0 fwm">
                                    <a
                                      className="cd chp"
                                      href={`productdetails/${item._id}`}
                                    >
                                      {item.title}
                                    </a>
                                  </h3>
                                  <span className="price dib mb__5">
                                    Rs. {item.sale_price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <h1 style={{ marginTop: "5rem" }}>No Product Found</h1>
                      )}
                    </>
                  ) : (
                    <h3 style={{ marginTop: "5rem" }}>Loading...</h3>
                  )}
                </div>
              </div>
              <div className="products-footer tc mt__40">
                <nav className="nt-pagination w__100 tc paginate_ajax">
                  <ul className="pagination-page page-numbers">
                    <li>
                      <span className="page-numbers current">1</span>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        3
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        4
                      </a>
                    </li>
                    <li>
                      <a className="next page-numbers" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
                {/* <!--end main content--> */}
        </>
    )
}

export default ShopAllProduct
