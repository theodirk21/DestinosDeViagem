import './Destinos.css'

const Destinos = ({nome, imagem, cidadePais, corDeFundo}) => {
    return (<div className='destinos'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cidadePais}</h5>
        </div>
    </div>

    )
}

export default Destinos