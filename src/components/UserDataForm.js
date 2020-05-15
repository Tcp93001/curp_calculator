import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import MomentUtils from "@date-io/moment";
import moment from 'moment'

import { estados } from '../constants'


const UserDataForm = (props) => {
  const [fechaNacimiento, setBirthDate] = useState(moment('01/23/2002'))
  const [genero, setGenero] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellidoPaterno, setApellidoPaterno] = useState('')
  const [apellidoMaterno, setApellidoMaterno] = useState('')
  const [entidad, setEntidad] = useState('')
  const handleDate = (event) => {
    setBirthDate(moment(event._d, 'DD/MM/YYYY'))
  }

  const handleSubmit = () => {
    props.submit({nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, genero, entidad})
  }

  const resetForm = () => {
    setBirthDate('02/23/1999')
    setGenero('')
    setNombre('')
    setApellidoPaterno('')
    setApellidoMaterno('')
    setEntidad('')
  }

  return (
    <div className="formulario_datos">
      <div className="row_datos">
        <TextField
          className="campos_datos"
          label="Nombre"
          id="nombre"
          name="nombre"
          type="text"
          onChange={event => setNombre(event.target.value.toUpperCase())}
          value={nombre}
          variant="outlined"
        />
        <TextField
          label="Apellido Paterno"
          id="apellidoPaterno"
          name="apellidoPaterno"
          type="text"
          onChange={event => setApellidoPaterno(event.target.value.toUpperCase())}
          value={apellidoPaterno}
          variant="outlined"
        />
      </div>
      <div className="row_datos">
        <TextField
          label="Apellido Materno"
          id="apellidoMaterno"
          name="apellidoMaterno"
          type="text"
          onChange={event => setApellidoMaterno(event.target.value.toUpperCase())}
          value={apellidoMaterno}
          variant="outlined"
        />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            disableFuture
            name="fechaNacimiento"
            openTo="year"
            format="DD/MM/YYYY"
            label="Fecha de Nacimiento"
            views={["date", "month", "year"]}
            value={fechaNacimiento}
            onChange={event => handleDate(event)}
            inputVariant="outlined"
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className="row_datos">
        <TextField
          select
          label="Estado de origen / nacimiento"
          id="entidad"
          name="entidad"
          onChange={event => setEntidad(event.target.value)}
          value={entidad}
          variant="outlined"
        >
          {
            estados.map((elem, index) => (
              <MenuItem key={index} value={elem.value}>{elem.name}</MenuItem>
            ))
          }
        </TextField>

        <div>
          <FormLabel component="legend">Género</FormLabel>
          <RadioGroup aria-label="gender" name="genero" value={genero} onChange={event => setGenero(event.target.value)}>
            <FormControlLabel value="H" control={<Radio />} label="Hombre" />
            <FormControlLabel value="M" control={<Radio />} label="Mujer" />
          </RadioGroup>
        </div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Calcular CURP</Button>
        <Button
          variant="contained"
          color="default"
          onClick={resetForm}
        >
          Limpiar campos
        </Button>
      </div>
    </div>
  );
};

export default UserDataForm;