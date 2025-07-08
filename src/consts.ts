import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'wiruka',
  description:
    'personal dev website covering projects, OSS contributions, and blog posts about the state of japanese ml research with reproductions.',
  href: 'https://astro-erudite.vercel.app',
  author: 'wiruka',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/wiruka0',
    label: 'GitHub',
  },
  //{
    //href: 'https://twitter.com/enscry',
    //label: 'Twitter',
  //},
  {
    href: 'mailto:willsnyder2nd@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
