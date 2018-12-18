import React, { Component } from 'react'
import RestaurantHome from './dumb/RestaurantHome'
import MenuHome from './dumb/MenuHome'
import Loading from './dumb/Loading'
import Footer from '../Blooprint/dumb/Footer'
import MediaQuery from 'react-responsive'
import GetSheetDone from 'get-sheet-done'
import { spreadsheet } from '../../../config'

class Menu extends Component {

    constructor(props) {
        super(props)
    }

        UNSAFE_componentWillMount() {
                GetSheetDone.raw(spreadsheet, 2)
                .then(sheet => {
                        const data = sheet.data.slice(1)
                        this.props.setInfoData(data)
                })

                GetSheetDone.raw(spreadsheet, 3)
                .then(sheet => {
                        const data = sheet.data.slice(1)
                        this.props.setHoursData(data)
                })

                GetSheetDone.raw(spreadsheet, 4)
                .then(sheet => {
                        const data = sheet.data.slice(1)
                        this.props.setMenuData(data)
                })
        }

    render () {

        return (
            <div>
                { this.props.restaurant.menus.length == 0 ? <Loading /> : <MainContent {...this.props} /> }
            </div>
        )
    }
}

class MainContent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <MediaQuery maxWidth={767}>
                    <div id="mobile_restaurant">
                        { this.props.location.pathname.includes('/menu') ? <MenuHome {...this.props} /> : <RestaurantHome {...this.props} /> }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={991}>
                    <div id="mobile_restaurant">
                        { this.props.location.pathname.includes('/menu') ? <MenuHome {...this.props} /> : <RestaurantHome {...this.props} /> }
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <div id="restaurant">
                        { this.props.location.pathname.includes('/menu') ? <MenuHome {...this.props} /> : <RestaurantHome {...this.props} /> }
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default Menu
