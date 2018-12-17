import React, { Component } from 'react'
import RestaurantHome from './dumb/RestaurantHome'
import MenuHome from './dumb/MenuHome'
import Loading from './dumb/Loading'
import Footer from '../Blooprint/dumb/Footer'
import MediaQuery from 'react-responsive'
import { handleBrowserTitleChange } from '../../functions'

class Menu extends Component {

    constructor(props) {
        super(props)

        this.restaurantName = 'ncfr' // TODO: as part of spreadsheet - used to select spreadsheet from client list
    }

    componentWillMount() {
            // get-sheet-done
    }

    componentDidMount() {
        handleBrowserTitleChange(this.restaurantName, 'prices') // TODO
    }

    handleDataRetrieval = function(data) {
        this.props.setSpreadsheetData(data)
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
