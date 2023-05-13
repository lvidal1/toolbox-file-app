import React from 'react'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import styles from '../styles/Layout.module.scss'
import Footer from './Footer'
import Header from './Header'

export const Layout = ({ children, title, subtitle, backLink }) => {
  return (
    <>
      <Header />
      <main>
        <Container fluid className={styles.titleContainer}>
          <Container>
            {title && <h1 className={styles.title}>{title}</h1>}
            { subtitle && <p className={`lead ${!backLink ? 'mb-5' : 'mb-2'}`}>
              {subtitle}
            </p> }
            { backLink && <div className={styles.back}><Link to={backLink}>Back</Link></div> }
          </Container>
        </Container>
        <Container fluid className={styles.mainContainer}>
          <Container>
          {children}
          </Container>
        </Container>
      </main>
      <Footer />
    </>
  )
}
