import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export const Layout = ({ children }) => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
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
    {children}
    </Container>

    </>
  )
}
