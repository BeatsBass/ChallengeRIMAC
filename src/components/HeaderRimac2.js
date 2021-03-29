import React, { Component } from 'react'
import Logo2 from '../img2.png'
import Logo from '../logo.png'
import family from '../family.png'

export class HeaderRimac2 extends Component {
    render() {
        const { successView } = this.props
        return (
            <div className="gridelement main">
                <header className='header'>
                    <img src={Logo} />
                </header>
                <p>© 2020 RIMAC Seguros y Reaseguros.</p>
                <div className="family hidden"> <img src={!successView ? family : Logo2} /></div>
            </div>
        )
    }
}

export default HeaderRimac2
