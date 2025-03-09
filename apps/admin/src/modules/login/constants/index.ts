interface LoginInput {
	name: string
	type: 'email' | 'password'
	placeholder: string
}
export const LOGIN_INPUTS: LoginInput[] = [
	{
		name: 'email',
		type: 'email',
		placeholder: 'Введите электронный адрес',
	},
	{
		name: 'password',
		type: 'password',
		placeholder: 'Введите пароль',
	},
]
