import React, { useState, useEffect } from "react";
import { API } from "../../../../components/API";
import Navigation from "../../../../components/Navigation";
import ShopBanner from "../../../../components/Shop/ShopBanner";
import CategoryFilter from "../../../../components/Shop/CategoryFilter";
import ShopAllProduct from "../../../../components/Shop/ShopAllProduct";
import axios from "axios";

const Subcatid = ({ categoryId, subcatId }) => {
  // const router = useRouter()
  // const {categoryId,subcatId }=router.query
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const productList = await axios.get(
      `${API}/api/product/subcategory/${categoryId}/${subcatId}`
    );
    const list = productList.data.product;
    setProducts(list);
  }
  return (
    <>
      <Navigation active={categoryId} />
      <div id="nt_content" style={{ marginTop: "20px" }}>
        <ShopBanner   />

        <div className="container container_cat pop_default cat_default mb__20">
          {/* <ShopFilterColor/> */}

          {/* <!--product container--> */}
          <div className="row">
            <CategoryFilter setProducts={setProducts} products={products} isCatgeory={false} />
            <ShopAllProduct products={products} />
          </div>
          {/* <!--end product container--> */}
        </div>
      </div>
    </>
  );
};

export default Subcatid;

export async function getServerSideProps(ctx) {
  const categoryId = ctx.params.categoryId;
  const subcatId = ctx.params.subcatId;
  return {
    props: {
      categoryId,
      subcatId,
    },
  };
}
