import React,{ useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda.jsx';
import useCriptomoneda from '../hooks/useCriptomoneda.jsx';
import Error from './Error.jsx';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border:none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #83b5ff;
    }
`;

const Formulario = ({setMoneda,setCriptomoneda}) =>{

    //state del listado de criptomonedas
    const [ listacripto, guardarCriptomonedas ] = useState([]);
    const [ error,setError] = useState(false);

    const MONEDAS = [
        {codigo: 'USD',nombre: 'Dolar de Estados Unidos'        },
        {codigo: 'MXN',nombre: 'Peso Mexicano'        },
        {codigo: 'EUR',nombre: 'Euro'        },
        {codigo: 'GBP',nombre: 'Libra Esterlina'        },
    ]

    // Utilizar useMoneda 
    const[moneda,SelectMoneda ] = useMoneda('Elije tu moneda', '', MONEDAS);

    //utilizar useCriptomoneda
    const[criptomoneda,SelectCripto] = useCriptomoneda('Elije tu criptomoneda','',listacripto);

    //ejecutar llamado a la API
    useEffect(() =>{

        const consultarAPI = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);            
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI(); 

    },[])

    //Cuando el usuario hace submit 
    const cotizarMoneda  = e =>{

        e.preventDefault();

        // Validar si ambos campos estan llenos. 
        if(moneda === '' || criptomoneda===''){
            setError(true);
            return;
        }
                   
        //Pasar los datos al componente principal 
        
        setError(false);
        setMoneda(moneda);
        setCriptomoneda(criptomoneda);


    }

    return(
        <form
            onSubmit={cotizarMoneda}
        >
            {error ?<Error mensaje='Todos los campos son obligatorios' /> :null}
            <SelectMoneda 
            
            />

            <SelectCripto
            
            />

            <Boton
                type='submit'
                value='Calcular'
            />
        </form>
    );
}




export default Formulario;