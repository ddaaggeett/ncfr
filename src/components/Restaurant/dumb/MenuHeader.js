import React, { Component } from 'react'
import { Link } from 'gatsby'
import MediaQuery from 'react-responsive'
import MenuButtons from './MenuButtons'

class MenuHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
            <MediaQuery maxWidth={767}>
                <div>
                    <Link to={'/'}>
                        <h1 className="menu_header" id="mobile_menu_header">{this.props.restaurant.restaurantInfo.map((tableline) => {
                            if( tableline[0] == 'name' ) {
                                return (
                                    <div className="link" onClick={() => {
                                            this.props.action_viewHome()
                                        }}>
                                        {tableline[1]}
                                    </div>
                                )
                            }
                        })}</h1>
                    </Link>

                </div>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={991}>
                <div>
                    <Link to={'/'}>
                        <h1 className="menu_header" id="tablet_menu_header">{this.props.restaurant.restaurantInfo.map((tableline) => {
                            if( tableline[0] == 'name' ) {
                                return (
                                    <div className="link" onClick={() => {
                                            this.props.action_viewHome()
                                        }}>
                                        {tableline[1]}
                                    </div>
                                )
                            }
                        })}</h1>
                    </Link>

                    <MenuButtons {...this.props} />

                </div>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <div>
                    <Link to={'/'}>
                        <h1 className="menu_header">{this.props.restaurant.restaurantInfo.map((tableline) => {
                            if( tableline[0] == 'name' ) {
                                return (
                                    <div className="link" onClick={() => {
                                            this.props.action_viewHome()
                                        }}>
                                        {tableline[1]}
                                    </div>
                                )
                            }
                        })}</h1>
                    </Link>

                    <MenuButtons {...this.props} />

                </div>
            </MediaQuery>
            </div>
        )
    }
}

export default MenuHeader
