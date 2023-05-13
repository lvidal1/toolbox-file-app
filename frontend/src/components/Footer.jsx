import React from 'react';
import GithubIcon from './icons/GithubIcon';
import PortfolioIcon from './icons/PortfolioIcon';
import { meta } from '../config';

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <p className="col-md-4 mb-0 text-muted d-flex">{meta.footer.copyright}</p>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a
              href={meta.footer.github}
              target="_blank"
              className="nav-link px-2 text-muted"
              rel="noreferrer"
              title="Github repo">
              <GithubIcon />
            </a>
          </li>
          <li className="nav-item">
            <a
              href={meta.footer.portfolio}
              target="_blank"
              className="nav-link px-2 text-muted"
              rel="noreferrer"
              title="Portfolio">
              <PortfolioIcon />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
