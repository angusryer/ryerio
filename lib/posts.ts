import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { PostSources, type SourceName } from '../types/postSources';
import { toReadableDate } from './utils';

const rootDir = process.cwd();

export function getFileNames(sourceName: SourceName) {
  return fs.readdirSync(rootDir + PostSources[sourceName]);
}

export function getPostIds(sourceName: SourceName) {
  const fileNames = getFileNames(sourceName);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getDataBasedOnId(id: string, sourceName: SourceName) {
  const source = fs.readFileSync(
    path.join(rootDir, PostSources[sourceName], `${id}.md`),
    'utf8'
  );
  const postData = matter(source);
  return {
    id,
    markDown: postData?.content || '',
    title: postData?.data?.title || id,
    date: new Date(postData?.data?.date).toLocaleDateString() || '',
    ...postData
  };
}

export function getAllPostsWithFrontMatter(
  sourceName: SourceName
): PostFrontMatterData[] {
  const files = fs.readdirSync(path.join(rootDir, PostSources[sourceName]));

  const allPosts: PostFrontMatterData[] = files.map((postId) => {
    const source = fs.readFileSync(
      path.join(rootDir, PostSources[sourceName], postId),
      'utf8'
    );
    const { data } = matter(source);
    const id = postId.replace(/\.md$/, '');
    const tagsArray = (() => {
      if (!data.tags) return ['general'];
      return Array.isArray(data.tags) ? data.tags : [data.tags];
    })();
    return {
      id,
      frontMatter: {
        ...data,
        title: data.title || id,
        tags: tagsArray,
        date: toReadableDate(data.date)
      }
    };
  });
  return allPosts;
}

type PostFrontMatterData = {
  id: string;
  frontMatter: {
    title: string;
    date: string;
    tags: string[];
    [key: string]: any;
  };
};
