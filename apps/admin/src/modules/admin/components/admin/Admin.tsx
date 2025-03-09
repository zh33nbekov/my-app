'use client'

import { useGetAdminProfileQuery } from '../../api/admin.api'
import { AdminProfile } from '../../index'
import styles from './admin.module.scss'

export const Admin = () => {
	const { data } = useGetAdminProfileQuery()
	const { fullName, email, role, id } = data ?? {
		fullName: 'Rai',
		email: '',
		role: '',
		id: '',
	}

	return (
		<div className={styles.admin}>
			<AdminProfile fullName={fullName} email={email} role={role} id={id} />
		</div>
	)
}
