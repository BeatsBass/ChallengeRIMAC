import React, { Component } from 'react'
import FormDniIntoDB from './FormDniIntoDB'
import FormNotDniIntoDB from './FormNotDniIntoDB'

export class FormAgregarPariente extends Component {


    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    continue2 = e => {
        e.preventDefault()
        console.log('tonto')
        this.props.nextStep2()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values, handleChange } = this.props
        return (
            <React.Fragment>
                {values.name === '' ? <FormNotDniIntoDB values={values} handleChange={handleChange} back={this.back} nextStep2={this.continue2} /> : <FormDniIntoDB
                    values={values}
                    back={this.back}
                    nextStep2={this.continue2}
                />}
            </React.Fragment>
        )
    }
}

export default FormAgregarPariente
