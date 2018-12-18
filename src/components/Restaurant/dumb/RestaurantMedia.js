import React from 'react'

const RestaurantMedia = (props) => {

    return (
        <div id="restaurant_home_media">
            {
                props.restaurant.restaurantInfo.map((tableline) => {
                    if( (tableline[0] === 'map') && (tableline[1] != undefined) ) {
                        return (
                            <a className="restaurant_home_item" href={tableline[1]} target="_blank">
                                <img src={require('../../../images/maps.png')} className="restaurant_home_media_item"/>
                            </a>
                        )
                    }
                    else if( (tableline[0] === 'facebook') && (tableline[1] != undefined) ) {
                        return (
                            <a className="restaurant_home_item" href={tableline[1]} target="_blank">
                                <img src={require('../../../images/facebook.png')} className="restaurant_home_media_item" className="fb_icon" />
                            </a>
                        )
                    }
                    else if( (tableline[0] === 'twitter') && (tableline[1] != undefined) ) {
                        return (
                            <a className="restaurant_home_item" href={tableline[1]} target="_blank">
                                <img src={require('../../../images/twitter.png')} className="restaurant_home_media_item" className="fb_icon" />
                            </a>
                        )
                    }
                    else if( (tableline[0] === 'instagram') && (tableline[1] != undefined) ) {
                        return (
                            <a className="restaurant_home_item" href={tableline[1]} target="_blank">
                                <img src={require('../../../images/instagram.png')} className="restaurant_home_media_item" className="fb_icon" />
                            </a>
                        )
                    }
                    else {
                        return null
                    }
                })
            }
        </div>
    )
}
export default RestaurantMedia
