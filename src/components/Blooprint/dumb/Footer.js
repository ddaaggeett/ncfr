import React from 'react'
import { SLOGAN } from '../constants'

const Footer = () => {
    return(
        <div className="restaurant_home_item" id="footer">
            <p id="signature">built by <a href="http://www.blooprint.xyz"><span id="reg">blooprint &reg;</span></a> {SLOGAN}</p>
        </div>
    )
}

export default Footer
