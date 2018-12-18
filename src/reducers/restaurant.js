import generateMenuHierarchy from '../components/Restaurant/generateMenuHierarchy'

const initialState = {
	restaurantInfo: [],
	restaurantHours: [],
	menus: [],
	openedMenuIndex: 0,
	openedSectionIndex: 0,
	freshLoaded: true,
	hasOpened: false
}

export default function restaurant(state = initialState, action) {
	switch(action.type) {

		case 'SET_INFO_DATA':

			return {
				...state,
				restaurantInfo: action.data
			}

		case 'SET_HOURS_DATA':

			return {
				...state,
				restaurantHours: action.data
			}


		case 'SET_MENU_DATA':

			return {
				...state,
				menus: generateMenuHierarchy(action.data)
			}


		case 'SET_OPENED_MENU':
			return {
				...state,
				freshLoaded: true,
				openedMenuIndex: action.index
			}

		case 'SET_OPENED_SECTION_INDEX':
			return {
				...state,
				freshLoaded: false,
				openedSectionIndex: action.index
			}

		case 'SET_HAS_OPENED':
			return {
				...state,
				hasOpened: true
			}

		default:
			return state

	}
}
