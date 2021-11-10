import React, {useState, useEffect } from "react";
import axios from "axios";
import { API } from "./API";
import styles from '../styles/Navigation.module.css'

const Navigation = ({active}) => {
    let [category, setCategory] = useState([]);

    useEffect(() => {
        getCategory();
      }, []);

      async function getCategory() {
        let categories = await axios.get(`${API}/api/category`);
        localStorage.setItem("category", JSON.stringify(categories?.data));
        setCategory(categories?.data);
      }

    return (
        <div id="ntheader" className="ntheader header_4 h_icon_iccl">
      <div className="ntheader_wrapper pr z_200">
        <div className="container">
          <div className="header__bot border_true dn db_lg">
            <nav className="nt_navigation tc hover_side_up nav_arrow_false" style={{marginTop:"30px"}} >
    {category.map((cate,index)=>{
      return(
    <div className={styles.dropdown} key={index}>
  <a className={styles.dropbtn} >{cate.category}</a>
  <div className={styles.dropdowncontent}>
  {cate.subCategory.map((subcate, index)=>
    <a href="#" key={index}>{subcate.category}</a>
  )}
    
  </div>
</div>
      )
    })}
    
            </nav>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Navigation
