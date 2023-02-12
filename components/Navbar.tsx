import Link from 'next/link';
import { ActiveLink } from './ActiveLink';
import style from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={ style['menu-container'] }>
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  );
}
