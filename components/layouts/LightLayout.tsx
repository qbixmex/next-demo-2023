import { FC, PropsWithChildren } from 'react';
import styles from './LightLayout.module.css';

interface Props extends PropsWithChildren {
  /* REMINDER: Put your custom props here! */
};

export const LightLayout: FC<Props> = ({ children }) => {
  return (
    <div className={ styles.lightTheme }>
      { children }
    </div>
  );
};
