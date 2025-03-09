interface FeedbackFormInput {
	name: 'name' | 'email'
	type: 'text' | 'email' | 'text'
	placeholder: 'name' | 'email'
}
export const FEEDBACK_FORM_INPUTS: FeedbackFormInput[] = [
	{
		name: 'name',
		type: 'text',
		placeholder: 'name',
	},
	{
		name: 'email',
		type: 'email',
		placeholder: 'email',
	},
]
