type WithChildren = {
  children?: React.ReactNode;
};

type StringChildren = {
  children?: string;
};

type CommonPostData = Record<string, string> & {
  id: string;
  title: string;
  date: string;
  slug: string;
  content: string;
  contentHtml: string;
};
