import React from "react";
import styles from "./ResponsiveGrid.module.css";

export default function ResponsiveGrid({ children }: WithChildren) {
	return <div className={styles.container}>{children}</div>;
}
