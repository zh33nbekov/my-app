export interface IGreeting {
	message: string
	title: string
	subtitle: string
	image: string | File
	description: string
	buttons: {
		isActive: boolean
		left: {
			title: string
			link: string
		}
		right: {
			title: string
			link: string
		}
	}
	id: string
}

export interface IGreetingData {
	message: string
	title: string
	subtitle: string
	buttons: {
		isActive: boolean
		left: {
			title: string
			link: string
		}
		right: {
			title: string
			link: string
		}
	}
	image: FormDataEntryValue | null
	description: string
	id: string
	language: string
}

export type EditGreetingFields =
	| keyof Omit<IGreeting, 'buttons' | 'id'>
	| 'leftButtonTitle'
	| 'leftButtonLink'
	| 'rightButtonTitle'
	| 'rightButtonLink'
