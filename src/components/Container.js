import React, { Component } from 'react';
import UserDataForm from './UserDataForm';
import ShowCurp from './ShowCurp';
import TitleLine from './TitleLine'
import Typography from '@material-ui/core/Typography'
import Loader from './Loader'
import moment from 'moment';

class Container extends Component {
  constructor() {
    super()

    this.state = {
      curp: '',
      isCalculating: false
    }
  }

  submitCurpData = async (data) => {
    this.setState({isCalculating: true})
    const {fechaNacimiento, values } = data
    const formatFechaNacimiento = moment(fechaNacimiento).format("DD/MM/YYYY")
    const sendInfo = {...values, fechaNacimiento: formatFechaNacimiento }
    const url = 'https://curp-service-dot-findep-produccion.uc.r.appspot.com/curp\n'

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(sendInfo);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(async response => {
        this.setState({isCalculating: false})
        const resp = await response.json()
        const { contenido: {curp} } = resp
        this.setState({curp: curp})
      })
      // .then(result => console.log(result))
      .catch(error => {
        this.setState({
          isCalculating: false,
          curp: 'No es posible calcular su CURP. Verifique su información e inténtelo de nuevo.'
        })
        console.log('error', error)
      });
  }

  render() {
    return (
      <div style={{padding: '30px 100px 40px'}}>
        <div className="centered_elements border_shadow" style={{width: '100%', paddingTop: '50px'}}>
          <div className="paper_container">
            <TitleLine />
            <UserDataForm style={{gridArea: 'b'}} submit={values => this.submitCurpData(values)} />
            {!this.state.curp && !this.state.isCalculating &&
              <div className="mensaje_inicial">
                <Typography variant='h3'>Capture sus datos</Typography>
              </div>}
            {this.state.isCalculating && <Loader />}
            {this.state.curp && !this.state.isCalculating && <ShowCurp style={{gridArea: 'c'}} curp={this.state.curp} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Container;


