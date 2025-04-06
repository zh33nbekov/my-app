import { ImageResponse } from 'next/og'
import './page.css'

export const size = {
	width: 37,
	height: 37,
}
export const contentType = 'image/png'

export default function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 21,
					background: 'black',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: '#cc6ce7',
				}}
			>
				Rai.
			</div>
		),
		{
			...size,
		}
	)
}
