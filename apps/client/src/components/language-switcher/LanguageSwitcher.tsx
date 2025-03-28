'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './language-switcher.module.scss'

export const LanguageSwitcher: React.FC = () => {
	const router = useRouter()
	const locale = useLocale()
	const [language, setLanguage] = useState(locale)
	const languageChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target
		setLanguage(value)
		router.replace(value)
	}

	return (
		<select
			id='language'
			name='language'
			value={language}
			aria-label='Language'
			onChange={languageChangeHandler}
			className={styles.languageSwitcher}
		>
			<option className={styles.languageSwitcher__option} value='ru'>
				RU
			</option>
			<option className={styles.languageSwitcher__option} value='en'>
				EN
			</option>
		</select>
	)
}
