import PostTags from '@components/shared-base/PostTags/PostTags';
import CodeSnippet from '@components/shared-base/PostTags/PostTags';
import PostListItem from '@components/shared-base/PostListItem/PostListItem';
import { SourceName } from '@typedefs/posts';
import Link from 'next/link';

type PostLinkListProps = {
  content: any;
  category: SourceName;
};

export default function PostLinkList({ content, category }: PostLinkListProps) {
  if (
    !content ||
    !Object.hasOwn(content, category) ||
    !Object.keys(content[category]).length
  ) {
    return null;
  }

  return (
    <ul>
      {content[category]
        .sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((post: any) => {
          return (
            <PostListItem key={post.id}>
              <Link href={{ pathname: `/${category}/${post.id}` }}>
                <a>
                  {`${post.frontMatter.title} - ${post.frontMatter.description}`}
                </a>
              </Link>
              <br />
              <PostTags>{post.frontMatter.tags.join(' | ')}</PostTags>
            </PostListItem>
          );
        })}
    </ul>
  );
}
