import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
	sidebar: {
		isSidebar: boolean
		isAnimating: boolean
		animationClass: 'closed' | 'opened' | ''
	}
}

const initialState: IInitialState = {
	sidebar: {
		isSidebar: true,
		animationClass: 'opened',
		isAnimating: false,
	},
}

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showSidebar: (state) => {
			state.sidebar.isSidebar = true
			state.sidebar.animationClass = 'opened'
		},
		hideSidebar: (state) => {
			state.sidebar.isSidebar = false
			state.sidebar.animationClass = 'closed'
		},
		toggleSidebar: (state) => {
			state.sidebar.isSidebar = !state.sidebar.isSidebar
			state.sidebar.animationClass = 'closed'
		},
		handleAnimating: (state, action) => {
			state.sidebar.isAnimating = action.payload
		},
	},
})

export default uiSlice
export const { showSidebar, hideSidebar, toggleSidebar, handleAnimating } = uiSlice.actions
