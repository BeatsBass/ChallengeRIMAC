import React, { Component } from 'react'

export class FormAgregarPlan extends Component {
    render() {
        const { prevStep, nextStep2 } = this.props
        return (
            <div className="gridelement main2">
                <h2>Elige tu protección</h2>
                <p>Selecciona tu plan de salud ideal.</p>
                <form onSubmit={nextStep2}>
                    <input type="submit" value="Continuar" />
                    <button type="button" onClick={prevStep} >Retroceder</button>
                </form>
            </div>
        )
    }
}

export default FormAgregarPlan
