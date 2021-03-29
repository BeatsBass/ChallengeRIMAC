import React, { Component } from 'react'
import FormAgregarPariente from './FormAgregarPariente'
import LoginDNIForm from './LoginDNIForm'

import { db } from "../configFirebase";
import FormAgregarPlan from './FormAgregarPlan';
import Success from './Success';

export class UserForm extends Component {

    state = {
        step: 0,
        name: '',
        nameNotDB: '',
        lastname1: '',
        lastname2: '',
        dateU: '',
        dni: '',
        phone: '',
        genre: 0,
        asegurados: [],
        plan: 0,
        dniIntoDb: false,
        lastname: ''
    }

    nextStep = () => {
        this.sendDataFireBase()
        this.props.setFinalV(true)
        /* const { step } = this.state
        console.log(this.state)
        this.setState({
            step: step + 1
        }) */
    }

    nextStep2 = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
        if(this.state.step === 2){
            this.props.setSucces(true)
        }
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        /* e.target.value = 'h' */
        console.log(input, e.target.value)
        this.setState({ [input]: e.target.value })

    }

    sendDataFireBase = () => {
        const { dni } = this.state
        const h = document.querySelector('.lds-dual-ring')
        h.style.display = 'flex';
        db.collection("dni").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            const data = docs.find(e => e.iddni === dni)
            h.style.display = 'none';
            if (data !== undefined) {
                const { name, lastname } = data
                const lastnameData = lastname.split(' ')
                this.setState({ lastname1: lastnameData[0] })
                this.setState({ lastname2: lastnameData[1] === undefined ? 'Apellido2' : lastnameData[1] })
                this.setState({ name })
                this.setState({ dniIntoDb: true })
            } else {
                this.setState({ lastname1: '' })
                this.setState({ lastname2: '' })
                this.setState({ name: '' })
                this.setState({ dniIntoDb: false })
            }
            this.nextStep2()
        });
    }


    render() {
        const { step } = this.state
        const { name, lastname1, lastname2, dateU, dni, phone, lastname, nameNotDB } = this.state
        const values = { name, lastname1, lastname2, dateU, dni, phone,  lastname, nameNotDB }
        switch (step) {
            case 0:
                return (
                    <LoginDNIForm
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 1:
                return (
                    <FormAgregarPariente
                        dniIntoDb={this.state.dniIntoDb}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        prevStep={this.prevStep}
                        nextStep2={this.nextStep2}
                    />
                )
            case 2:
                return (<FormAgregarPlan
                    prevStep={this.prevStep}
                    nextStep2={this.nextStep2} />)
            case 3:
                return (<Success />)
        }
    }
}

export default UserForm
