interface INavigationSectionLink {
	path: string
	label: string
}
interface INavigationLink {
	path: string
	label: string
}

export const NAVIGATION_SECTIONS_LINKS: INavigationSectionLink[] = [
	{
		label: 'Приветствие',
		path: '/dashboard/greeting',
	},
	{
		label: 'Обо мне',
		path: '/dashboard/about',
	},
	{
		label: 'Связаться',
		path: '/dashboard/contact',
	},
]

export const NAVIGATION_LINKS: INavigationLink[] = [
	{
		label: 'Чат',
		path: '/dashboard/chat',
	},
	{
		label: 'Обратная связь',
		path: '/dashboard/feedback',
	},
]
