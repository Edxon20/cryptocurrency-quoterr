import React,{Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`

    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none; //Se utiliza para quitarle por defecto la estructura estandar
    border-radius: 10px;
    border: none;
    font-size: 1.8rem;


`;

const useCriptomoneda = (label,stateInicial, opciones) => {

    // State de nuestro custom hook
    const [state,actualizarState] = useState(stateInicial);

    const coinGet = e =>{
        actualizarState(e.target.Name);
        console.log(e.target.value);
    }

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={coinGet}
                value = {state}
            >
            <option value=''>--Selecciones--</option>
                {opciones.map(opcion => (

                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Id}>{opcion.CoinInfo.Name}</option>
                    
                ))}
            </Select>
        </Fragment>
    );

    // Retornar state, interfaz y funcion que modifica el state 
    
    return [state, SelectCripto];
}

export default useCriptomoneda;