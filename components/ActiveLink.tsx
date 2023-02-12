import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './Navbar.module.css';

type Props = {
  text: string;
  href: string;
};

export function ActiveLink({ text, href }: Props) {
  const { asPath } = useRouter();

  return (
    <Link href={ href }>
      <a className={ asPath === href ? style.active : null }>{ text }</a>
    </Link>
  );
}
