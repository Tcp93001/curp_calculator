import React, { Component } from 'react';
import UserDataForm from './UserDataForm';
import ShowCurp from './ShowCurp';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class Container extends Component {

  submitCurpData = async (data) => {
    console.log(data)
    const {fechaNacimiento, values } = data
    const sendInfo = {...values, ...fechaNacimiento }
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

    await fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="centered_elements" style={{width: '100%', paddingTop: '50px'}}>
        <Paper elevation={3} className="paper_container">
          <Typography variant ="h4" style={{gridArea: 'a', marginLeft: '30px'}}>
            Servicio de Cálculo de CURP
          </Typography>
          <UserDataForm style={{gridArea: 'b b', minWidth: '50%'}} submit={values => this.submitCurpData(values)} />
          <ShowCurp style={{gridArea: 'c c'}} curp="afafsdfsdfsd123123" />
        </Paper>
      </div>
    );
  }
}

export default Container;


