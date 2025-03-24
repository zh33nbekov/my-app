import clsx from 'clsx'
import { memo, TextareaHTMLAttributes } from 'react'
import styles from './textarea.module.scss'

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: string
}

export const Textarea: React.FC<ITextarea> = memo(({ className, error, ...props }) => (
	<div className={styles.textareaBox}>
		<textarea className={clsx(styles.textareaBox__textarea, className)} {...props} />
		{error && <span className={styles.textareaBox__error}>{error}</span>}
	</div>
))

Textarea.displayName = 'Textarea'
