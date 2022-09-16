import React from 'react';
import styled from '@emotion/styled'

const ResultadoDiv =  styled.div`




`;



const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null; 

    return(
        <div>
            <p>El precio es: <span>{resultado.price}</span></p>
            <p>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></p>
            <p>variacion ultimas 24 hrs: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></p>
        </div>
    );

}

export default Cotizacion;