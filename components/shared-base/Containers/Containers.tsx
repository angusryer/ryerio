import styles from './Containers.module.css';

function Section({ children }: WithChildren) {
  return <section className={styles.section}>{children}</section>;
}

function Grid({ children }: WithChildren) {
  return <div className={styles.grid}>{children}</div>;
}

const Containers = {
  Section,
  Grid
};

export default Containers;
