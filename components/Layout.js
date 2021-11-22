import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

const Layout = ({children}) => {
    return (
        <>
<Header/>
 <main>{children }</main> 
<Footer/>
        </>
    )
}

export default Layout
