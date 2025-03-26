import { ISocialLinks } from '@/types'
import { Instagram, Linkedin, SocialGitHub } from '../../public/icons'

export const SOCIAL_LINKS: ISocialLinks[] = [
	{ icon: Instagram, label: 'Instagram', link: 'https://www.instagram.com/zh.rai333' },
	{
		icon: Linkedin,
		label: 'Linkedin',
		link: 'https://www.linkedin.com/in/rai-zheenbekov-087b81354/',
	},
	{ icon: SocialGitHub, label: 'GitHub', link: 'https://github.com/zh33nbekov' },
] as const
