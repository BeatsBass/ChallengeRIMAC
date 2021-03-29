import React, { Component } from 'react'

export class LoginDNIForm extends Component {

    state = {
        botonCheck: true
    }

    checkDni = (dni) => {
        let k = 0
        if (dni.length > 8 || dni.length < 8) k++
        if (isNaN(parseInt(dni))) k++
        return k
    }

    checkPhone = (phone) => {
        let k = 0
        if (phone.length > 9 || phone.length < 9) k++
        if (isNaN(parseInt(phone))) k++
        return k
    }

    checkDataSend = () => {
        const { values } = this.props
        let error = this.checkDni(values.dni) + this.checkPhone(values.phone)
        if (error === 0) return true
        return false
    }

    continue = e => {
        e.preventDefault()
        if (this.checkDataSend()) this.setState({ botonCheck: true })
        else this.setState({ botonCheck: false })
        this.props.nextStep()
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <div className="gridelement main2">
                <h2>Obtén tu seguro ahora</h2>
                <p>Ingresa los datos para comenzar.</p>

                <form onSubmit={this.continue}>
                    <div className="form-group">
                        <input className="form-field" type="text" required placeholder="Nro. de Documento" onChange={handleChange('dni')} defaultValue={values.dni} maxLength={8} />
                    </div>
                    <div className="form-group">
                        <input className="form-field" type="date" required placeholder="Fecha de nacimiento" onChange={handleChange('dateU')} defaultValue={values.dateU} />
                    </div>
                    <div className="form-group">
                        <input className="form-field" type="text" required placeholder="Celular"
                            onChange={handleChange('phone')} defaultValue={values.phone} maxLength={9} />
                    </div>

                    <div className="form_group">
                        <input type="checkbox" id="vehicle1" name="vehicle1" required value="Bike" />
                        <label htmlFor="vehicle1"> Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.</label>
                    </div>
                    <div className="form_group">
                        <input type="checkbox" id="vehicle2" name="vehicle2" required value="Car" />
                        <label htmlFor="vehicle2"> Acepto la Política de Envío de Comunicaciones Comerciales.</label>
                    </div>
                    {!this.state.botonCheck ? <p className="errorForm">Error en los campos</p> : ''}
                    <input type="submit" value="Comencemos" />
                </form>

            </div>
        )
    }
}

export default LoginDNIForm
