import React from "react";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({ children }: StringChildren) {
	return <h2 className={styles.heading}>{children}</h2>;
}
