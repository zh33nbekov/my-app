import styles from './language-switcher.module.scss'

interface ILanguageSwitcher {
	language: string
	onChangeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const LanguageSwitcher: React.FC<ILanguageSwitcher> = (props) => (
	<select
		aria-label='Language'
		id='language'
		name='language'
		value={props.language}
		onChange={props.onChangeLanguage}
		className={styles.languageSwitcher}
	>
		<option className={styles.header__option} value='ru'>
			RU
		</option>
		<option className={styles.header__option} value='en'>
			EN
		</option>
	</select>
)
