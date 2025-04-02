import { BASE_URL } from '@/constants'
import { IFeedbackRequest, IFeedbackResponse } from '../index'

export const sendFeedback = async (data: IFeedbackRequest): Promise<IFeedbackResponse> => {
	try {
		const response = await fetch(`${BASE_URL}/feedback`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json',
			},
		})
		if (!response.ok) {
			throw new Error(response.statusText)
		}
		return response.json()
	} catch (error) {
		throw error
	}
}
