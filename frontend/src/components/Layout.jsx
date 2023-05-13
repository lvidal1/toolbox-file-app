import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import styles from '../styles/Layout.module.scss'

export const Layout = ({ children, title, subtitle, backLink }) => {
  return (
    <>
    <Navbar className={styles.navbar} variant="dark">
      <Container>
        <Navbar.Brand href="#home">Files</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Leonardo V.</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className='py-5'>
    {title && <h1 className='mb-2'>{title}</h1>}

     { subtitle && <p className={`lead ${!backLink ? 'mb-5' : 'mb-2'}`}>
        {subtitle}
      </p> }
      { backLink && <div className='mb-4'><Link to={backLink}>Back</Link></div> }
    {children}
    </Container>

    </>
  )
}
