export type SourceName = keyof typeof PostSources; 

/**
 * These paths should be relatively referenced from the root directory:
 * e.g.: /ryerio/<path> 
 */
export enum PostSources {
    projects = "/posts/projects",
    learning = "/posts/learning"
}