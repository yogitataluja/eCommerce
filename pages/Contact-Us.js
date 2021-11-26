import { useState, useEffect } from "react";
import { API } from "../components/API";
import axios from "axios";
import Navigation from "../components/Navigation";
const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    getAddress();
  }, []);
  const getAddress = async () => {
    let response = await axios.get(`${API}/api/config`);
    setAddress(response.data.result[0].address[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !phoneNo || !message) {
      alert.show("please fill all the fields", { type: "error" });
    } else {
      let response = await axios.post(`${API}/api/contact/add_Contact`, {
        name,
        email,
        phoneNo,
        message,
      });
      if (response.data.message) {
        alert(
          "Thanks for reaching us.We will get back to you at the earliest."
        );
        setName("");
        setEmail("");
        setphoneNo("");
        setMessage("");
      }
    }
  }
  return (
    <>
      <Navigation />
      <div id="nt_content" style={{ marginTop: "20px" }}>
        <div className="kalles-section page_section_heading">
          <div className="page-head tc pr oh cat_bg_img page_head_">
            <div
              className="parallax-inner nt_parallax_false lazyload nt_bg_lz pa t__0 l__0 r__0 b__0"
              data-bgset="assets/images/shop/shop-banner.jpg"
            ></div>
            <div className="container pr z_100">
              <h1 className="mb__5 cw">Contact Us</h1>
              <p className="mg__0">
                Follow your passion, and success will follow you
              </p>
            </div>
          </div>
        </div>

        <div className="kalles-section container mb__50 cb">
          <div className="row fl_center">
            <div className="contact-form col-12 col-md-6 order-1 order-md-0">
              <form method="post" action="#" className="contact-form">
                <h3 className="mb__20 mt__40">DROP US A LINE</h3>
                <p>
                  <label htmlFor="ct-name">Your Name (required)</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required="required"
                    type="text"
                    id="ct-name"
                    name="ct-name"
                  />
                </p>
                <p>
                  <label htmlFor="ct-email">Your Email (required)</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required="required"
                    type="email"
                    id="ct-email"
                    name="ct-email"
                  />
                </p>
                <p>
                  <label htmlFor="ct-phone">Your Phone Number</label>
                  <input
                    value={phoneNo}
                    onChange={(e) => setphoneNo(e.target.value)}
                    type="tel"
                    id="ct-phone"
                    name="ct-phone"
                    pattern="[0-9\-]*"
                  />
                </p>
                <p>
                  <label htmlFor="ct-message">Your Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="20"
                    id="ct-message"
                    name="ct-message"
                    required="required"
                  ></textarea>
                </p>
                <input
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  className="button w__100"
                  value="Send"
                />
              </form>
            </div>
            <div className="contact-content col-12 col-md-6 order-0 order-md-1">
              <h3 className="mb__20 mt__40">CONTACT INFORMATION</h3>
              <p>
                We love to hear from you on our customer service, merchandise,
                website or any topics you want to share with us. Your comments
                and suggestions will be appreciated. Please complete the form
                below.
              </p>
              <p className="mb__5 d-flex">
                <i className="las la-home fs__20 mr__10 text-primary"></i>{" "}
                {address?.company},{address?.address},{address?.city},
                {address?.state}
              </p>
              <p className="mb__5 d-flex">
                <i className="las la-phone fs__20 mr__10 text-primary"></i>
                {address?.contact}
              </p>
              <p className="mb__5 d-flex">
                <i className="las la-envelope fs__20 mr__10 text-primary"></i>{" "}
                <a
                  className="__cf_email__"
                  data-cfemail="d6b5b9b8a2b7b5a296b5b9bba6b7b8aff8b5b9bb"
                >
                  {address?.email}
                </a>
              </p>
              <p className="mb__5 d-flex">
                <i className="las la-clock fs__20 mr__10 text-primary"></i> Everyday
                9:00-18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
