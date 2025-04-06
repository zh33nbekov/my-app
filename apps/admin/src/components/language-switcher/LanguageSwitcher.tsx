import { memo } from 'react'
import styles from './language-switcher.module.scss'

interface ILanguageSwitcher {
	language: string
	onChangeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const LanguageSwitcher: React.FC<ILanguageSwitcher> = memo((props) => (
	<>
		<label htmlFor='language' className={styles.languageSwitcher}>
			<span>Выберите язык</span>
			<select
				id='language'
				name='language'
				value={props.language}
				onChange={props.onChangeLanguage}
			>
				<option value='ru'>RU</option>
				<option value='en'>EN</option>
			</select>
		</label>
	</>
))

LanguageSwitcher.displayName = 'LanguageSwitcher'
