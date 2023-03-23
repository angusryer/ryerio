import Containers from '@components/shared-base/Containers';
import Typography from '@components/shared-base/Typography';

type SectionProps = {
  title?: string;
};

export default function Services({
  children,
  title
}: WithChildren & SectionProps) {
  return (
    <Containers.Section>
      {!title ? null : <Typography.Heading>{title}</Typography.Heading>}
      <Containers.Grid>{children}</Containers.Grid>
    </Containers.Section>
  );
}
