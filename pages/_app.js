import "../styles/globals.css";
import Script from 'next/script'


import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>

{/* <Script  src="/assets/js/interface.js"></Script> */}
          {/* <Script
            type="text/javascript"
            src="/assets/js/jquery.hoverIntent.min.js"
          ></Script> */}
          <Script src="/assets/js/jquery-3.5.1.min.js"></Script>
          <Script src="/assets/js/nouislider.min.js"></Script>
          <Script src="/assets/js/jarallax.min.js"></Script>
          <Script src="/assets/js/packery.pkgd.min.js"></Script>
          {/* <Script src="/assets/js/magnific-popup.min.js"></Script> */}
          <Script src="/assets/js/flickity.pkgd.min.js"></Script>
          <Script src="/assets/js/lazysizes.min.js"></Script>
          <Script src="/assets/js/js-cookie.min.js"></Script>
          <Script src="/assets/js/jquery.countdown.min.js"></Script>
          <Script src="/assets/js/photoswipe.min.js"></Script>
          <Script src="/assets/js/photoswipe-ui-default.min.js"></Script>
          <Script src="/assets/js/drift.min.js"></Script>
          <Script src="/assets/js/isotope.pkgd.min.js"></Script>
          <Script src="/assets/js/resize-sensor.min.js"></Script>
          <Script src="/assets/js/theia-sticky-sidebar.min.js"></Script>

          <Script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossOrigin="anonymous"
          ></Script>
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          ></Script>
          <Script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossOrigin="anonymous"
          ></Script>
    <Layout> 
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
