import styles from './decorative-element.module.scss'

type Position = Pick<React.CSSProperties, 'position'>['position']

interface IDecorativeElement {
	dynamic?: boolean
	className?: string
	position?: Position
	style?: React.CSSProperties
	anchorOrigin?: {
		vertical: 'top' | 'bottom' | 'center'
		horizontal: 'left' | 'right' | 'center'
	}
}

type AnchorOrigin = Pick<IDecorativeElement, 'anchorOrigin'>['anchorOrigin']

const checkOrigin = (anchorOrigin: AnchorOrigin) => {
	const verticalStyle = () => {
		switch (anchorOrigin?.vertical) {
			case 'top':
				return { top: 0 }
			case 'bottom':
				return { bottom: 0 }
			case 'center':
				return { top: '50%', transform: 'translateY(-50%)' }
			default:
				return {}
		}
	}

	const horizontalStyle = () => {
		if (anchorOrigin?.vertical === 'center' && anchorOrigin?.horizontal === 'center') {
			return {
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}
		}
		switch (anchorOrigin?.horizontal) {
			case 'center':
				return { left: '50%', transform: 'translateX(-50%)' }
			case 'left':
				return { left: 0 }
			case 'right':
				return { right: 0 }
			default:
				return {}
		}
	}

	return { ...verticalStyle(), ...horizontalStyle() }
}

export const DecorativeElement = (props: IDecorativeElement) => (
	<>
		<div
			id={styles.decorativeElement}
			className={props.className}
			style={{
				...props.style,
				...checkOrigin(props.anchorOrigin),
				position: props.position || 'absolute',
			}}
		/>
	</>
)
