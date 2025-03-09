export interface IAbout {
	id: string
	description: string
	image: string | File
}
export type EditAboutFields = keyof Omit<IAbout, 'image'>
