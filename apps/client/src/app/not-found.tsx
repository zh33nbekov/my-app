import { Metadata } from 'next'
import './page.css'

export const metadata: Metadata = {
	title: '404 - Страница не найдена',
	description: 'Страница, которую вы ищете, не существует.',
}

const NotFound = () => (
	<div className='notFound'>
		<h4 className='notFound-title'>404 - Страница не найдена</h4>
		<p className='notFound-description'>Страница, которую вы ищете, не существует.</p>
	</div>
)

export default NotFound
