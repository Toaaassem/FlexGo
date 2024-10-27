import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Make sure this path is correct

export default function NavLinkcomp({ link }) {
  return (
    <li className="nav-item ms-4">
      <Link className="nav-link active" aria-current="page" to={link.path}>
        {link.name}
      </Link>
    </li>
  );
}
