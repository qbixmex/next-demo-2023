import { ReactNode } from 'react';
import styles from './LightLayout.module.css';

export function LightLayout ({ children }: {
  children: ReactNode;
}) {
  return (
    <div className={ styles.lightTheme }>
      { children }
    </div>
  );
}
