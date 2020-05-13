import React from 'react';
import Typography from '@material-ui/core/Typography'

const ShowCurp = (props) => {
  return (
    <div className="centered_elements">
      <div className="curp_container">
        <Typography variant ="h5" gutterBottom>
          CURP calculada
        </Typography>
        <Typography variant="h3">
          {props.curp}
        </Typography>
      </div>
    </div>
  );
};

export default ShowCurp;