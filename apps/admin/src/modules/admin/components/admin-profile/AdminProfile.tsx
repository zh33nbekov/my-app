'use client'

import styles from './admin-profile.module.scss'

interface IAdminProfile {
	id: string
	role: string
	email: string
	fullName: string
}

export const AdminProfile: React.FC<IAdminProfile> = ({ fullName, role, email, id }) => (
	<div className={styles.admin}>
		<h3 className={styles.admin__name}>{fullName}</h3>
	</div>
)
