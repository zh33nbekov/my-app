export interface IGreeting {
	title: string
	message: string
	subtitle: string
	buttons: {
		isActive: boolean
		left: {
			link: string
			title: string
		}
		right: {
			link: string
			title: string
		}
	}
	image: string
	description: string
}
