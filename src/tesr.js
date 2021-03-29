     {/* <HashRouter> */}



        {/* <div className="container1">
          <div className="gridelement main">
            <header className='header'>
              <img src={Logo} />
            </header>
            <h1>Seguro de</h1>
            <h1><b>Salud</b></h1>
            <ul>
              <li><img src={ic_shield} />Cómpralo de manera fácil y rápida </li>
              <li className="hidden"><img src={ic_shield} />Cotiza y compra tu seguro 100% digital </li>
              <li className="hidden"><img src={ic_money} />Hasta S/.12 millones de cobertura anual</li>
              <li className="hidden"><img src={ic_clinic} />Más de 300 clínicas en todo el Perú</li>
            </ul>
            <p>© 2020 RIMAC Seguros y Reaseguros.</p>
            <div className="family"> <img src={family} /></div>
          </div>
          <div className="gridelement main2">
            <h2>Obtén tu seguro ahora</h2>
            <p>Ingresa los datos para comenzar.</p>

            <form>
            <div class="form-group">
                <input class="form-field" type="text" required placeholder="Nro. de Documento"/>
            </div>
            <div class="form-group">
                <input class="form-field" type="date" required placeholder="Fecha de nacimiento"/>
            </div>
            <div class="form-group">
                <input class="form-field" type="number" required placeholder="Celular"/>
            </div>

              <div className="form_group">
                <input type="checkbox" id="vehicle1" name="vehicle1" required value="Bike" />
                <label for="vehicle1"> Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.</label>
              </div>
              <div className="form_group">
                <input type="checkbox" id="vehicle2" name="vehicle2" required value="Car" />
                <label for="vehicle2"> Acepto la Política de Envío de Comunicaciones Comerciales.</label>
              </div>
              <input type="submit" value="Comencemos" />
            </form>

          </div>
        </div>

 */}


        {/* <div className="container">


          <header className='header'>
            <h1>JOB CHALLENGE JOJHAN</h1>
            {<nav>
              <div className="container">

                <ul className="link">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    {this.state.authed
                      ? <button
                        className="btn" onClick={this.logout}>Logout</button>
                      : <span>
                        <Link to="/login" className="login-logout"> Login</Link>
                        <Link to="/register" className="login-logout">Register</Link>
                      </span>}
                  </li>
                </ul>
              </div>
            </nav>}
          </header>




          {!this.state.authed ? <div className="container"><h3>Please login if you are existing user.</h3>
            <hr />
            <h3> Please register if you are not registered to use the app.</h3>
          </div> : ''}
          <div>
            <Route path='/' render={() => this.state.authed ? <Redirect to='/dashboard' /> : <div></div>} />
            <Route path='/login' render={() => this.state.authed ? <Redirect to='/dashboard' /> : <Login />} />
            <Route path='/dashboard'
              render={() => this.state.authed ?
                <MainView userid={this.state.userid} email={this.state.email} /> :
                <Redirect to='/login' />} />
            <Route path='/register' component={Register} />
          </div>

        </div>
       */}
      /* </HashRouter> */