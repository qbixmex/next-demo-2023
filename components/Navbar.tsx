import { ActiveLink } from './ActiveLink';
import style from './Navbar.module.css';

type Item = {
  id: number;
  text: string;
  href: string;
};

const menuItems: Item[] = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'About', href: '/about' },
  { id: 3, text: 'Contact', href: '/contact' },
  { id: 4, text: 'Pricing', href: '/pricing' },
];

export const Navbar = () => (
  <nav className={ style['menu-container'] }>
    { menuItems.map(({ id, text, href }) => (
      <ActiveLink key={ id } text={ text } href={ href } />
    )) }
  </nav>
);
