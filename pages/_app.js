import "../styles/globals.css";
// import "../public/assets/css/base.css";
// import "../public/assets/css/defined.css";
// import "../public/assets/css/bootstrap.min.css";
// import "../public/assets/css/reset.css";
// import "../public/assets/css/drift-basic.min.css";
// import "../public/assets/css/flickity-fade.css";
// import "../public/assets/css/style.css";
// import "../public/assets/css/home-default.css";
// import "../public/assets/css/blog.css";
// import "../public/assets/css/font-icon.min.css";

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout> 
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
