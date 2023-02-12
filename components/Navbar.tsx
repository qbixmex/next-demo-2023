import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="navigation">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
