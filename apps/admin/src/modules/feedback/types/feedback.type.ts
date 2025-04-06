export interface IGetFeedbackRes {
	page: number
	limit: number
	data: IFeedback[]
	totalItems: number
	totalPages: number
}
export interface IFeedback {
	_id: string
	name: string
	email: string
	message: string
}
