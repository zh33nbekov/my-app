import { HeaderLinks } from '@/types'

export const HEADER_LINKS_OPTIONS = {
	ABOUT: {
		LABEL: 'About',
		PATH: 'about',
	},
	PROJECTS: {
		LABEL: 'Projects',
		PATH: 'projects',
	},
	SKILLS: {
		LABEL: 'Skills',
		PATH: 'skills',
	},
	QUALIFICATION: {
		LABEL: 'Qualification',
		PATH: 'qualification',
	},
	CONTACT: {
		LABEL: 'Contact',
		PATH: 'contact',
	},
} as const

export const HEADER_LINKS: HeaderLinks[] = [
	{
		label: HEADER_LINKS_OPTIONS.ABOUT.LABEL,
		path: HEADER_LINKS_OPTIONS.ABOUT.PATH,
	},
	{
		label: HEADER_LINKS_OPTIONS.PROJECTS.LABEL,
		path: HEADER_LINKS_OPTIONS.PROJECTS.PATH,
	},
	{
		label: HEADER_LINKS_OPTIONS.SKILLS.LABEL,
		path: HEADER_LINKS_OPTIONS.SKILLS.PATH,
	},
	{
		label: HEADER_LINKS_OPTIONS.QUALIFICATION.LABEL,
		path: HEADER_LINKS_OPTIONS.QUALIFICATION.PATH,
	},
	{
		label: HEADER_LINKS_OPTIONS.CONTACT.LABEL,
		path: HEADER_LINKS_OPTIONS.CONTACT.PATH,
	},
]
