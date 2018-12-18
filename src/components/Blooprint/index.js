import React, { Component } from 'react';
import Contact from '../../components/Blooprint/dumb/Contact'
import Header from './dumb/Header'
import Products from './dumb/Products'

class Blooprint extends Component {

    render() {
        return (
            <div>
                <Header />
                <Products />
                <Contact />
            </div>

        )
    }
}

export default Blooprint
