import React from 'react'
import styles from './tree-dots.module.scss'

interface IThreeDots {
	role: 'admin' | 'client'
}

export const ThreeDots: React.FC<IThreeDots> = ({ role }) => (
	<div className={`${styles.dots} ${role === 'admin' ? styles['admin'] : styles['client']}`}>
		<div></div>
		<div></div>
		<div></div>
	</div>
)
