import React from 'react';
import Typography from '@material-ui/core/Typography'
import AFIN from '../assets/images/apoyo_fin.PNG'
import MASNOM from '../assets/images/mas_nomina.png'
import INDEP from '../assets/images/independencia.png'
import AECON from '../assets/images/apoyo_economico.png'
import FINSOL from '../assets/images/finsol.png'


const TitleLine = () => {
  return (
    <div  style={{gridArea: 'a', marginLeft: '30px'}}>
      <div style={{marginBottom: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* TODO: alinear correctamente las imagenes u obtener nuevo íconos de mejor calidad SVG */}
        <img src={AFIN} alt="AFIN" />
        <img src={AECON} alt="AECON" />
        <img src={INDEP} alt="INDEP" />
        <img src={MASNOM} alt="MASNOM" />
        <img src={FINSOL} alt="FINSOL" />
      </div>
      <Typography variant ="h3">
        Cálculo de CURP
      </Typography>
    </div>
  );
};

export default TitleLine;