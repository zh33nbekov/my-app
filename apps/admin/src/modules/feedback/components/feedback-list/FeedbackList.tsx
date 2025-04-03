import { Loader } from '@/components'
import clsx from 'clsx'
import Link from 'next/link'
import { Delete } from '../../../../../public/icons'
import { IFeedback } from '../../types/feedback.type'
import styles from './feedback-list.module.scss'

interface IFeedbackList {
	isDeleting: boolean
	isFetching: boolean
	onClear: () => Promise<void>
	feedback: IFeedback[] | undefined
	deletedItemId: string | undefined
	onRemove: (id: string) => Promise<void>
}

export const FeedbackList: React.FC<IFeedbackList> = (props) => (
	<div className={styles.tableContainer}>
		{props.isFetching && (
			<div className={styles.loading}>
				<Loader />
			</div>
		)}
		<table className={styles.table}>
			<thead>
				<tr className={styles.tableRow}>
					<th className={styles.tableHeader}>#</th>
					<th className={clsx(styles.tableHeader)}>Имя</th>
					<th className={clsx(styles.tableHeader, styles.email)}>Email</th>
					<th className={clsx(styles.tableHeader, styles.message)}>Сообщение</th>
					<th className={clsx(styles.tableHeader)}>Удалить</th>
				</tr>
			</thead>
			<tbody>
				{/* {!props.feedback?.length && (
					<tr>
						<td>Здесь пока пусто...</td>
					</tr>
				)} */}
				{props.feedback?.map(({ name, email, message, _id }, index) => (
					<tr key={index} className={styles.tableRow}>
						<td className={styles.tableCell}>{index + 1}</td>
						<td className={clsx(styles.tableCell, styles.name)}>{name}</td>
						<td className={clsx(styles.tableCell, styles.email)}>
							<Link href={`mailto:${email}`}>{email}</Link>
						</td>
						<td className={clsx(styles.tableCell, styles.message)}>{message}</td>
						<td className={clsx(styles.tableCell, styles.delete)}>
							<button onClick={() => props.onRemove(_id)}>
								{props.isDeleting && props.deletedItemId === _id ? (
									<Loader className={styles.delete__loader} />
								) : (
									<Delete />
								)}
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
)
