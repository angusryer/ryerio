import styles from '@styles/shared.module.css';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Title = ({ children }: Props) => {
  return <h1 className={styles.title}>{children}</h1>;
};

const Subtitle = ({ children }: Props) => {
  return <h2 className={styles.subtitle}>{children}</h2>;
};

const Slogan = ({ children }: Props) => {
  return <h2 className={styles.slogan}>{children}</h2>;
};

const Heading = ({ children }: Props) => {
  return <h3 className={styles.heading}>{children}</h3>;
};

const Typography = { Title, Subtitle, Slogan, Heading };
export default Typography;
