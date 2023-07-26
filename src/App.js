import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import TipoDestino from './componentes/TipoDestino';


function App() {

  const tiposDestino = [
    {
      nome: 'Museus',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Diversão/Parques',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Restaurantes',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Lugares Históricos',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Igrejas',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Praias/Paisagens Naturais',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Outros',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [destinos, setDestinos] = useState([])

  const aoNovoDestinoAdicionado = (destino) => {
    debugger
    setDestinos([...destinos, destino])
  }



  return (
    <div className="App">
      <Banner />
      <Formulario tiposDestino={tiposDestino.map(tipoDestino => tipoDestino.nome)} aoDestinoCadastrado={destino => aoNovoDestinoAdicionado(destino)} />
      
      {tiposDestino.map(tipoDestino =><TipoDestino 
      key={tipoDestino.nome} 
      nome={tipoDestino.nome} 
      corPrimaria={tipoDestino.corPrimaria} 
      corSecundaria={tipoDestino.corSecundaria}
      destinos={destinos.filter( destino => destino.tipoDestino === tipoDestino.nome)}/> )}
      
    </div>
  );
}

export default App;
