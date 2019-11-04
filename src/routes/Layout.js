import React from 'react'
import NavBar from '../components/navigation/NavBar'

const Layout = ({ children }) => (
    <section>
        <NavBar />
        {children}
    </section>
)

export default Layout