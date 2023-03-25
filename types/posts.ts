export type SourceName = keyof typeof PostSources;

/**
 * These paths should be relatively referenced from the root directory:
 * e.g.: /ryerio + /<path>, where /<path> is the part you write down there 👇
 */
export enum PostSources {
  make = '/posts/make',
  docs = '/posts/docs',
  thot = '/posts/thot'
}

export type PostProps = {
  id: string;
  markDown: string;
  description: string;
  title: string;
  date: string;
};
