import { CSSProperties } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const active: CSSProperties = {
  color: '#fff',
};

type Props = {
  text: string;
  href: string;
};

export function ActiveLink({ text, href }: Props) {
  const { asPath } = useRouter();

  return (
    <Link href={ href }>
      <a style={ (asPath === href) ? active : undefined }>{ text }</a>
    </Link>
  );
}
