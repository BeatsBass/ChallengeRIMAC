import React, { Component } from 'react'

export class FormDniIntoDB extends Component {
    render() {
        const { values, back, nextStep2} = this.props
        return (
            <div className="gridelement main2">
                <h2>{values.name === '' ? 'Hola, ¡empecemos!' : `Hola, ${values.name}`}</h2>
                <p>{values.name === '' ? 'Cuéntanos un poco sobre ti' : 'Valida que los datos sean correctos.'}</p>
                <p>Datos personales del titular</p>

                <form onSubmit={nextStep2}>
                    <div className="form-group">
                        <input className="form-field" type="text" required placeholder="Nro. de Documento" readOnly defaultValue={values.dni} maxLength={8} />
                    </div>
                    <div className="form-group">
                        <input className="form-field" type="text" required readOnly defaultValue={values.name} />
                    </div>
                    <div className="form-group">
                        <input className="form-field" type="text" required readOnly defaultValue={values.lastname1} />
                    </div>
                    <div className="form-group">
                        <input className="form-field" type="text" required readOnly defaultValue={values.lastname2} />
                    </div>
                    <div className="form-group">
                        <input className="form-field" type="date" required placeholder="Fecha de nacimiento" defaultValue={values.dateU} />
                    </div>
                    <div className="radioInput">
                        <label>Género</label>
                        <div className="form-group">
                            <input type="radio" required name="radio" id="radio1" />
                            <label for="radio1">Masculino</label>
                        </div>
                        <div className="form-group">
                            <input type="radio" required name="radio" id="radio2" />
                            <label for="radio2">Femenino</label>
                        </div>
                    </div>
                    <div className="radioInput">
                        <label>¿A quién vamos a asegurar?</label>
                        <div className="form-group">
                            <input type="radio" required name="radio1" id="radio11" />
                            <label for="radio11">Solo a mí</label>
                        </div>
                        <div className="form-group">
                            <input type="radio" required name="radio1" id="radio21" />
                            <label for="radio21">A mí y a mi familia</label>
                        </div>
                    </div>
                    <input type="submit" value="Continuar" />
                    <button type="button" onClick={back} >Retroceder</button>
                </form>

            </div>
        )
    }
}

export default FormDniIntoDB
