import { memo } from 'react'
import styles from './language-switcher.module.scss'

interface ILanguageSwitcher {
	selectedLanguage: string
	onChangeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const LanguageSwitcher: React.FC<ILanguageSwitcher> = memo((props) => (
	<>
		<label htmlFor='language' className={styles.languageSwitcher}>
			<span>Выберите язык</span>
			<select
				id='language'
				name='language'
				value={props.selectedLanguage}
				onChange={props.onChangeLanguage}
			>
				<option value='en'>EN</option>
				<option value='ru'>RU</option>
			</select>
		</label>
	</>
))

LanguageSwitcher.displayName = 'LanguageSwitcher'
