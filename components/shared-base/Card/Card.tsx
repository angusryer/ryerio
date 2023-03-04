import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

type CardProps = {
	headline: string;
	sub: string;
	image: string;
	imageAlt: string;
};

export default function Card({ headline, sub, image, imageAlt }: CardProps) {
	return (
		<div className={styles.container}>
			<h3>{headline}</h3>
			<p>{sub}</p>
			<div className={styles.imageContainer}>
				<Image
					width={200}
					height={200}
					objectFit='cover'
					src={image}
					alt={imageAlt}
				/>
			</div>
		</div>
	);
}
