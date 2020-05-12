import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { estados } from '../constants'

const UserDataForm = (props) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNacimiento: '',
      entidad: '',
    },
    onSubmit: values => {
      console.log(values)
      props.submit(values)
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
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

      <TextField
        label="Apellido Materno"
        id="apellidoMaterno"
        name="apellidoMaterno"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.apellidoMaterno}
        variant="outlined"
      />  

      

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

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserDataForm;