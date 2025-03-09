import { NextIcon, PrevIcon } from '../../../public/icons'
import styles from './slider.module.scss'

interface ISlider {
	prevSlide: () => void
	nextSlide: () => void
	children: React.ReactNode
}

export const Slider = ({ prevSlide, nextSlide, children }: ISlider) => (
	<div className={styles.slider}>
		<button
			className={styles.slider__prev}
			id='prev-icon'
			name='prev-icon'
			aria-label='prev-icon'
			onClick={prevSlide}
		>
			<PrevIcon />
		</button>
		{children}
		<button
			className={styles.slider__next}
			id='next-icon'
			name='next-icon'
			aria-label='next-icon'
			onClick={nextSlide}
		>
			<NextIcon />
		</button>
	</div>
)
