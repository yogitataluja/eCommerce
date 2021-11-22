import React,{useState, useEffect} from 'react'
import { API } from "../API";
import Navigation from "../Navigation";
import ShopBanner from "../Shop/ShopBanner";
// import ShopFilterColor from "../../components/Shop/ShopFilterColor";
import CategoryFilter from "../Shop/CategoryFilter";
import ShopAllProduct from "./ShopAllProduct";
import axios from "axios";
const Shop = ({categoryId}) => {
    const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const productList = await axios.get(`${API}/api/product/all`);

      const list = productList.data.product.filter((prod) => {
        return prod.category === categoryId && prod.status;
      });

      setProducts(list);
    }
    getProduct();
  }, []);
    return (
        <>
      <Navigation active={categoryId} />

      <div id="nt_content" style={{ marginTop: "20px" }}>
        <ShopBanner  products={products}  />

        <div className="container container_cat pop_default cat_default mb__20">
          {/* <ShopFilterColor/> */}

          {/* <!--product container--> */}
          <div className="row">
            <CategoryFilter setProducts={setProducts}   isCategory={true} />
            <ShopAllProduct  products={products} />
          </div>
          {/* <!--end product container--> */}
        </div>
      </div>
    </>
    )
}

export default Shop
