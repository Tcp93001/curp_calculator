import React from 'react';
import Typography from '@material-ui/core/Typography'
import '../css/styles.css'

const ShowCurp = (props) => {
  return (
    <div className="centered_elements">
      <div className="curp_container">
        <Typography variant ="h4" gutterBottom>
          CURP calculada
        </Typography>
        <Typography variant="h2">
          {props.curp}
        </Typography>
      </div>
    </div>
  );
};

export default ShowCurp;