import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Layout.module.scss';
import ScrollToTop from './ScrollToTop';
import { Helmet } from 'react-helmet';
import { meta } from '../config';

export default function Header() {
  return (
    <>
      <ScrollToTop />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
      </Helmet>
      <header>
        <Navbar className={styles.navbar} variant="dark">
          <Container>
            <Navbar.Brand href="#home">{meta.header}</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Leonardo V.</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
