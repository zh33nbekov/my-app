import Link from 'next/link'
import { IFeedback } from '../../types/feedback.type'
import styles from './feedback-list.module.scss'

interface IFeedbackList {
	feedback: IFeedback[] | undefined
}

export const FeedbackList: React.FC<IFeedbackList> = ({ feedback }) => (
	<div className={styles.tableContainer}>
		<table className={styles.table}>
			<thead>
				<tr className={styles.tableRow}>
					<th className={styles.tableHeader}>#</th>
					<th className={styles.tableHeader}>Имя</th>
					<th className={styles.tableHeader}>Email</th>
					<th className={styles.tableHeader}>Сообщение</th>
				</tr>
			</thead>
			<tbody>
				{feedback?.map(({ name, email, message }, index) => (
					<tr key={index} className={styles.tableRow}>
						<td className={styles.tableCell}>{index + 1}</td>
						<td className={styles.tableCell}>{name}</td>
						<td className={styles.tableCell}>
							<Link href={`mailto:${email}`}>{email}</Link>
						</td>
						<td className={styles.tableCell}>
							<p>{message}</p>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
)
