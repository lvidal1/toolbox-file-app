import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Layout.module.scss'

export default function Header () {
  return (
    <header>
      <Navbar className={styles.navbar} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Toolbox File App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Leonardo V.</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
