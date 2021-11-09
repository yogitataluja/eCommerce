import "../styles/globals.css";
import Head from "next/head";
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i&amp;display=swap"
          rel="stylesheet"/>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/css/font-icon.min.css" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/reset.css" />
        <link rel="stylesheet" href="assets/css/defined.css" />
        <link rel="stylesheet" href="assets/css/base.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/home-cosmetics.css"></link>
        <script src="assets/js/jquery-3.5.1.min.js"></script>
        <script src="assets/js/jarallax.min.js"></script>
        <script src="assets/js/packery.pkgd.min.js"></script>
        <script src="assets/js/jquery.hoverIntent.min.js"></script>
        <script src="assets/js/magnific-popup.min.js"></script>
        <script src="assets/js/flickity.pkgd.min.js"></script>
        <script src="assets/js/lazysizes.min.js"></script>
        <script src="assets/js/js-cookie.min.js"></script>
        <script src="assets/js/jquery.countdown.min.js"></script>
        <script src="assets/js/interface.js"></script>
      </Head>
      <Layout> 
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
