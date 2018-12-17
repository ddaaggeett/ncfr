import React, { Component } from 'react'
import { emailConfigs } from '../../../../configs/emailConfigs'
import RestaurantHome from './dumb/RestaurantHome'
import MenuHome from './dumb/MenuHome'
import Loading from './dumb/Loading'
import Footer from '../Blooprint/dumb/Footer'
import client_data from '../../../../configs/restaurant/clients'
import MediaQuery from 'react-responsive'
import { handleBrowserTitleChange } from '../../functions'

class Menu extends Component {

    constructor(props) {
        super(props)

        var io = require('socket.io-client')
        if (process.env.NODE_ENV === "production") {
            console.log('socket.io host server is PRODUCTION mode')
            this.socket = io.connect('http://'+emailConfigs.blooprint+':1235')
        }
        else {
            console.log('socket.io host server is DEV mode')
            this.socket = io.connect('http://localhost:1235')
        }

        this.restaurantName = 'ncfr' // TODO: as part of spreadsheet - used to select spreadsheet from client list
    }

    componentWillMount() {
        this.socket.emit('getMenuData', this.restaurantName)
        this.socket.on('mountMenuData', function(data) {
            this.handleDataRetrieval(data)
        }.bind(this))
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
