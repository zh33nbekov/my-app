import { Education, Experience, IQualificationTab } from '../index'

export const QUALIFICATION_TABS: IQualificationTab[] = [
	{ label: 'Experience', component: Experience },
	{ label: 'Education', component: Education },
] as const
