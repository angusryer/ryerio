import Typography from '@components/shared-base/Typography/Typography';
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';

const markdownComponents: ReactMarkdownOptions['components'] = {
  h1: Typography.Title,
  h2: Typography.Subtitle,
  h3: Typography.Heading
};

export default markdownComponents;
