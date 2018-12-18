export function setInfoData(data) {
    return {
        type: 'SET_INFO_DATA',
        data
    }
}
export function setHoursData(data) {
    return {
        type: 'SET_HOURS_DATA',
        data
    }
}
export function setMenuData(data) {
    return {
        type: 'SET_MENU_DATA',
        data
    }
}
export function setOpenedMenu(index) {
    return {
        type: 'SET_OPENED_MENU',
        index
    }
}
export function setOpenedSectionIndex(index) {
    return {
        type: 'SET_OPENED_SECTION_INDEX',
        index
    }
}
export function setHasOpened() {
    return {
        type: 'SET_HAS_OPENED'
    }
}
