import { CaretBottom, CaretRight } from '../../../../public/icons'

interface INavigationIcon {
	isOpen: boolean
}

export const NavigationIcon: React.FC<INavigationIcon> = ({ isOpen }) =>
	isOpen ? <CaretBottom /> : <CaretRight />
