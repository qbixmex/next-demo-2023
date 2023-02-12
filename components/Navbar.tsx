import React from 'react';
import Link from 'next/link';
import style from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={ style['menu-container'] }>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
