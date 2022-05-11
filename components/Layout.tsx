import styles from "../styles/shared.module.css";
import Footer from "./sections/Footer/Footer";

export default function Layout({ children }: WithChildren) {
	return (
		<>
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
}
