import { BASE_URL } from '@/constants'
import { fetchApi } from '@packages/shared'
import { IFeedbackRequest, IFeedbackResponse } from '../index'

export const sendFeedback = async (data: IFeedbackRequest) => {
	const response = await fetchApi<IFeedbackResponse>(`${BASE_URL}/feedback`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'content-type': 'application/json',
		},
	})

	return response
}
