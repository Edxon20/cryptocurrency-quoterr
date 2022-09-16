import React from 'react';
import styled from '@emotion/styled'

const ResultadoDiv =  styled.div`
    color: #FFF;    
`;
const Parrafo = styled.p`
`;
const Precio = styled.p`
    font-size: 30px;
`;


const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null; 

    return(
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <p>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></p>
            <p>variacion ultimas 24 hrs: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></p>
        </ResultadoDiv>
    );

}

export default Cotizacion;