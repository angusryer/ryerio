import React from "react";
import ResponsiveGrid from "../../shared-base/ResponsiveGrid/ResponsiveGrid";
import SectionContainer from "../../shared-base/SectionContainer/SectionContainer";
import SectionHeader from "../../shared-base/SectionHeader/SectionHeader";

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
