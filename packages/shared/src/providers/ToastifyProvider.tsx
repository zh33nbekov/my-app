import { toast, ToastContainer } from 'react-toastify'

export const showSuccessToast = (message: string) => toast.success(message)
export const showFailedToast = (message: string) => toast.error(message)
export const ToastifyProvider = () => (
	<ToastContainer
		position='top-right'
		autoClose={3000}
		hideProgressBar={false}
		newestOnTop
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
		theme='light'
	/>
)
