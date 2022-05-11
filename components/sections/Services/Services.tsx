import React from "react";
import ResponsiveGrid from "../../base/ResponsiveGrid/ResponsiveGrid";
import SectionContainer from "../../base/SectionContainer/SectionContainer";
import SectionHeader from "../../base/SectionHeader/SectionHeader";

type SectionProps = {
	title?: string;
};

export default function Services({
	children,
	title
}: WithChildren & SectionProps) {
	return (
		<SectionContainer>
			{!title ? null : <SectionHeader>{title}</SectionHeader>}
			<ResponsiveGrid>{children}</ResponsiveGrid>
		</SectionContainer>
	);
}
