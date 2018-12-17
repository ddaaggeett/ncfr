import React, { Component } from 'react';
import Contact from '../../components/Blooprint/dumb/Contact'
import Header from './dumb/Header'
import Products from './dumb/Products'
import { handleBrowserTitleChange } from '../../functions'

class Blooprint extends Component {

    componentDidMount() {
        handleBrowserTitleChange('Blooprint', 'marker')
    }

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
