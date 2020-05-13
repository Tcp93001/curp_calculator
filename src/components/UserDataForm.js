import React, { useState } from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import MomentUtils from "@date-io/moment";
import moment from 'moment'

import { estados } from '../constants'


const UserDataForm = (props) => {
  const [fechaNacimiento, setDate] = useState(moment('12/01/2002'))

  const handleDate = (event) => {
    setDate(moment(event._d, 'DD/MM/YYYY'))
    console.log(moment(event).format('DD/MM/YYYY'))
  }


  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      entidad: '',
    },
    onSubmit: values => {
      props.submit({values, fechaNacimiento})
    },
  });

  return (

    <div className="formulario_datos">
      <form onSubmit={formik.handleSubmit}>
          <div className="row_datos">
            <TextField
              className="campos_datos"
              label="Nombre"
              id="nombre"
              name="nombre"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nombre}
              variant="outlined"
            />

            <TextField
              label="Apellido Paterno"
              id="apellidoPaterno"
              name="apellidoPaterno"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.apellidoPaterno}
              variant="outlined"
            />
          </div>

          <div className="row_datos">
            <TextField
              label="Apellido Materno"
              id="apellidoMaterno"
              name="apellidoMaterno"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.apellidoMaterno}
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
              onChange={formik.handleChange}
              value={formik.values.entidad}
              variant="outlined"
            >
              {
                estados.map((elem, index) => (
                  <MenuItem key={index} value={elem.value}>{elem.name}</MenuItem>
                ))
              }
            </TextField>

            <Button variant="contained" color="primary" type="submit">Calcular cURP</Button>
          </div>
        </form>


    </div>


  );
};

export default UserDataForm;