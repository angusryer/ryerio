import styles from '@styles/shared.module.css';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

export default function PageLayout({ children }: WithChildren) {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
