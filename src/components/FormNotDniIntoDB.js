import React, { Component } from 'react'

export class FormNotDniIntoDB extends Component {
    render() {
        const { values, handleChange, back, nextStep2 } = this.props
        return (
            <div className="gridelement main2">
                <h2>{values.name === '' ? 'Hola, ¡empecemos!' : `Hola, ${values.name}`}</h2>
                <p>{values.name === '' ? 'Cuéntanos un poco sobre ti' : 'Valida que los datos sean correctos.'}</p>
                <p>Ingresa tu nombre</p>

                <form onSubmit={nextStep2}>
                    <div className="form-group">
                        <input className="form-field" type="text" required placeholder="Nombres" onChange={handleChange('nameNotDB')} defaultValue={values.nameNotDB} />
                    </div>
                    <div className="form-group">
                        <input className="form-field" type="text" required placeholder="Apellidos" onChange={handleChange('lastname')} defaultValue={values.lastname} />
                    </div>
                    <div className="radioInput">
                        <label>¿A quién vamos a asegurar?</label>
                        <div className="form-group">
                            <input type="radio" required name="radio" id="radio1" />
                            <label for="radio1">Solo a mí</label>
                        </div>
                        <div className="form-group">
                            <input type="radio" required name="radio" id="radio2" />
                            <label for="radio2">A mí y a mi familia</label>
                        </div>
                    </div>
                    <input type="submit" value="Continuar" />
                    <button type="button" onClick={back} >Retroceder</button>
                </form>

            </div>
        )
    }
}

export default FormNotDniIntoDB
