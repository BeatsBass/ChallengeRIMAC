import React, { Component } from 'react';
import './App.css'

import UserForm from './components/UserForm';
import HeaderRimac from './components/HeaderRimac';
import HeaderRimac2 from './components/HeaderRimac2';


class App extends Component {

  constructor() {
    super();
    this.state = {
      finalV: false,
      successView:false
    }
  }

  setFinalV = (value) => {
    this.setState({ finalV: value })
  }

  setSucces = (value) => {
    console.log('hollll')
    this.setState({ successView: value })
  }


  /* componentDidMount() {
    this.removeFirebaseEvent = firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true, userid: user.uid, email: user.email })


      } else {
        this.setState({
          authed: false,
        })
      }
    })

  } */


  /* logout = () => {
    firebaseApp.auth().signOut();
  }

  componentWillUnmount() {
    this.removeFirebaseEvent()
  } */

  render() {
    return (
      <div className="container1">
        <div class="lds-dual-ring"></div>
        {!this.state.finalV ? <HeaderRimac /> : <HeaderRimac2 successView={this.state.successView} />}
        <UserForm setFinalV={this.setFinalV} setSucces={this.setSucces} />
      </div>
    )
  }
}

export default App;