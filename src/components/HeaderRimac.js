import React from 'react'
import Logo from '../logo.png'
import Logo2 from '../img2.png'
import ic_money from '../ic_money.png'
import ic_clinic from '../ic_clinic.png'
import ic_shield from '../ic_shield.png'
import family from '../family.png'

export default function HeaderRimac() {
    return (
        <div className="gridelement main">
            <header className='header'>
                <img src={Logo} />
            </header>
            <div>
                <h1>Seguro de</h1>
                <h1><b>Salud</b></h1>
                <ul>
                    <li><img src={ic_shield} />Cómpralo de manera fácil y rápida </li>
                    <li className="hidden"><img src={ic_shield} />Cotiza y compra tu seguro 100% digital </li>
                    <li className="hidden"><img src={ic_money} />Hasta S/.12 millones de cobertura anual</li>
                    <li className="hidden"><img src={ic_clinic} />Más de 300 clínicas en todo el Perú</li>
                </ul>
            </div>

            <p>© 2020 RIMAC Seguros y Reaseguros.</p>
            <div className="family"> <img src={family} /></div>
        </div>
    )
}
