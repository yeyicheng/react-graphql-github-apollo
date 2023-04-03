import React from 'react';

import Link from '../../Link';

import './style.css';

const Footer = () => (
  <div className="Footer">
    <div>
      <small>
        <span className="Footer-text">Customized by</span>{' '}
        <Link
          className="Footer-link"
          href="https://github.com/yichengye310"
        >
          Yicheng Ye
        </Link>{' '}
        <span className="Footer-text">with &hearts;</span>
      </small>
    </div>
  </div>
);

export default Footer;