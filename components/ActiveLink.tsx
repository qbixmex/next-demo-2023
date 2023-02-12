import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './Navbar.module.css';

type Props = {
  text: string;
  href: string;
};

export const ActiveLink = ({ text, href }: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Link href={ href }>
      <a className={ asPath === href ? style.active : null }>{ text }</a>
    </Link>
  );
};
