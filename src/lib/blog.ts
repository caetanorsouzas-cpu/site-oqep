import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const sortPosts = (posts: Post[]) => [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

const fmt = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date) => fmt.format(d);

const short = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', timeZone: 'UTC' });
export const formatShort = (d: Date) => short.format(d).replace('.', '');
