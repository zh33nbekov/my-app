export interface ILoginRequest {
	email: string
	id: string
	role: string
	info: string
}
export interface ILoginResponse {
	email: FormDataEntryValue | null
	password: FormDataEntryValue | null
}
export interface ILoginApiError {
	data: {
		errors: string[]
		message: string
	}
}
