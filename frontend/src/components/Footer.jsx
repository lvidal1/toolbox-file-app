import React from 'react';
import GithubIcon from './GithubIcon';
import PortfolioIcon from './PortfolioIcon';

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <p className="col-md-4 mb-0 text-muted d-flex">© 2023 Toolbox File App</p>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a
              href="https://github.com/lvidal1/toolbox-file-app"
              target="_blank"
              className="nav-link px-2 text-muted"
              rel="noreferrer"
              title="Github repo">
              <GithubIcon />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://lvidal.pe/"
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
