import axios from 'axios'
import { useState, useEffect} from 'react'
import {API} from "./API"

const Footer = () => {
  const[configuration, setConfiguration]=useState(null)
  const[category, setCategory]=useState([])
  const [page, setPage] = useState(null);
  // const [email, setEmail] = useState("");

  useEffect(()=>{
    getConfig()
    getCategory()
    getPages()
  },[])
  const getPages = async () => {
    const res = await axios.get(`${API}/api/page/view_page`);
    console.log(res);
    setPage(res.data.Page);
  };
async function getConfig(){
  const res= await axios.get(`${API}/api/config`)
  setConfiguration(res.data.result[0])
}
async function getCategory() {
  let res = await axios.get(`${API}/api/category`);
  // console.log(res.data)
  setCategory(res?.data)
}

    return (
        <footer id="nt_footer" className="bgbl footer-1">
        <div id="kalles-section-footer_top" className="kalles-section footer__top type_instagram">
          <div className="footer__top_wrap footer_sticky_false footer_collapse_true nt_bg_overlay pr oh pb__30 pt__80">
            <div className="container pr z_100">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mb__50 order-lg-1 order-1">
                  <div className="widget widget_text widget_logo">
                    <h3 className="widget-title fwsb flex al_center fl_between fs__16 mg__0 mb__30 dn_md">
                      <span className="txt_title">Get in touch</span><span className="nav_link_icon ml__5" />
                    </h3>
                    <div className="widget_footer">
                      <div className="footer-contact">
                        <p>
                          <a className="db" href="index.html">
                            <img className="w__100 mb__15 lz_op_ef lazyload max-width__95px" src={configuration?.logo[0].Footerlogo} data-src={configuration?.logo[0].Footerlogo} />
                          </a>
                        </p>
                        <p>
                          <i className="pegk pe-7s-map-marker"> </i><span>{configuration?.address[0].address} <br /><span className="pl__30">{`${configuration?.address[0].city} , ${configuration?.address[0].country}`}</span></span>
                        </p>
                        <p><i className="pegk pe-7s-call" /> <span>+91 123 456 7890 </span></p>
                        <div className="nt-social">
                          <a href="https://www.facebook.com/" className="facebook cb ttip_nt tooltip_top">
                            <span className="tt_txt">Follow on Facebook</span><i className="facl facl-facebook" />
                          </a>
                          <a href="https://twitter.com/" className="twitter cb ttip_nt tooltip_top">
                            <span className="tt_txt">Follow on Twitter</span><i className="facl facl-twitter" />
                          </a>
                          <a href="https://www.instagram.com/" className="instagram cb ttip_nt tooltip_top">
                            <span className="tt_txt">Follow on Instagram</span><i className="facl facl-instagram" />
                          </a>
                          <a href="https://www.linkedin.com/" className="linkedin cb ttip_nt tooltip_top">
                            <span className="tt_txt">Follow on Linkedin</span><i className="facl facl-linkedin" />
                          </a>
                          <a href="https://www.pinterest.com/" className="pinterest cb ttip_nt tooltip_top">
                            <span className="tt_txt">Follow on Pinterest</span><i className="facl facl-pinterest" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12 mb__50 order-lg-2 order-1">
                  <div className="widget widget_nav_menu">
                    <h3 className="widget-title fwsb flex al_center fl_between fs__16 mg__0 mb__30">
                      <span className="txt_title">Categories</span><span className="nav_link_icon ml__5" />
                    </h3>
                    <div className="menu_footer widget_footer">
                    
                      <ul className="menu">
{category.length>0 && category?.map((item,index)=>
{return(
  <li className="menu-item" key={index}><a href="#">{item.category}</a></li>)}
)}     								
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12 mb__50 order-lg-3 order-1">
                  <div className="widget widget_nav_menu">
                    <h3 className="widget-title fwsb flex al_center fl_between fs__16 mg__0 mb__30">
                      <span className="txt_title">Infomation</span><span className="nav_link_icon ml__5" />
                    </h3>
                    {page=== null? (<></>): (
                      <>
                      {page.map((i,index)=>(
                        <div className="menu_footer widget_footer" key={index}>
                      <ul className="menu" >
                        <li className="menu-item">
                          <a href="#">{i.title}</a>
                        </li>
                      </ul>
                    </div>))}
                      </>
                    )}
                    
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12 mb__50 order-lg-4 order-1">
                  <div className="widget widget_nav_menu">
                    <h3 className="widget-title fwsb flex al_center fl_between fs__16 mg__0 mb__30">
                      <span className="txt_title">Useful links</span><span className="nav_link_icon ml__5" />
                    </h3>
                    <div className="menu_footer widget_footer">
                      <ul className="menu">
                        <li className="menu-item"><a href="#">Store Location</a></li>
                        <li className="menu-item"><a href="#">Latest Posts</a></li>
                        <li className="menu-item"><a href="about-us.html">About Us</a></li>
                        <li className="menu-item"><a href="#">FAQs</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb__50 order-lg-5 order-1">
                  <div className="widget widget_text">
                    <h3 className="widget-title fwsb flex al_center fl_between fs__16 mg__0 mb__30">
                      <span className="txt_title">Newsletter Signup</span><span className="nav_link_icon ml__5" />
                    </h3>
                    <div className="widget_footer newl_des_1">
                      <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                      <form method="post" action="#" className="mc4wp-form pr z_100">
                        <div className="mc4wp-form-fields">
                          <div className="signup-newsletter-form row no-gutters pr oh">
                            <div className="col col_email">
                              <input type="email" name="email" placeholder="Your email address" className="tc tl_md input-text" required="required" />
                            </div>
                            <div className="col-auto">
                              <button type="submit" className="btn_new_icon_false w__100 submit-btn truncate">
                                <span>Subscribe</span></button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="kalles-section-footer_bot" className="kalles-section footer__bot">
          <div className="footer__bot_wrap pt__20 pb__20">
            <div className="container pr tc">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12 col_1">Copyright © 2021
                  <span className="cp">Potions of Paradise</span> All rights reserved.</div>
                <div className="col-lg-6 col-md-12 col-12 col_2">
                  <ul id="footer-menu" className="clearfix">
                    <li className="menu-item"><a href="#">Shop</a></li>
                    <li className="menu-item"><a href="about-us.html">About Us</a></li>
                    <li className="menu-item"><a href="#">Contact Us</a></li>
                    <li className="menu-item"><a href="blog-grid.html">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer

