/**
 * @flow
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Work</Link>
        </li>
        <li>
          <Link to="/lab">Lab</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
