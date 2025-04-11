import React from 'react'
import Header from './Header'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <>
    <Header/>

    <main>{children}</main>

    <Nav/>
    </>
  )
}

export default Layout