import Head from 'next/head'
import BottomBanner from '../components/Home/BottomBanner'
import CategoryBanner from '../components/Home/CategoryBanner'
import NewProducts from '../components/Home/NewProducts'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import TrendPrdct from '../components/Home/TrendPrdct'
import Navigation from '../components/Navigation'


export default function Home() {
  return (<>
    <Head>
    <title>Home</title>
    </Head>
    <Navigation />
    <div id="nt_content">
    <div className="kalles-section nt_section type_slideshow type_carousel kalles-cosmetics__main-slide">
    </div>
       <TrendPrdct/>
       <CategoryBanner/>
       <NewProducts/>
        <BottomBanner/>
      </div>
   
   </>
  )
}
