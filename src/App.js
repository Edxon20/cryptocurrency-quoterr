import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './criptocurrency.jpg';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {

    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }

`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;  
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 50px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;


function App() {

  const[moneda, setMoneda] = useState('');
  const[criptomoneda,setCriptomoneda]= useState('');
  const[resultado, setResultado] = useState({});
  const[cargando, setCargando] = useState(false);

  useEffect(() => {

    //Evitamos la ejecucion la primera vez 
    if(moneda === '')return;    
    //
    const cotizarCriptomoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      //mostrar el spinner 
      setCargando(true);

      //ocultar el spinner y mostrar el resultado
      setTimeout(() => {

        setCargando(false);

        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

      }, 3000)

      //Usar console log hasta que se llegue a los datos con los que sea mas facil trabajar
      
    }
    cotizarCriptomoneda();
    }, [moneda, criptomoneda]);

    const componente = (cargando) ?<Spinner/> : <Cotizacion resultado={resultado} />    

  return (
    //Mostrar Spinner o resultado   

    <Contenedor>
      <div>
        <Imagen 
        src={imagen}
        alt='imagen cripto'
        />
      </div>
      <div>
        <Heading>
          Cotiza Criptomonedas al instante
        </Heading>            
        <Formulario
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}       
        />  
        
        {componente}
        
      </div>
    </Contenedor>
  );
}

export default App;
