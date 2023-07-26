
import Destinos from '../Destinos'
import './TipoDestino.css'

const TipoDestino = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        (props.destinos.length > 0) ? <section className='tipoDestino' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='destino'>
                {props.destinos.map( destino => <Destinos corDeFundo={props.corPrimaria} key={destino.nome} nome={destino.nome} cidadePais={destino.cidadePais} imagem={destino.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default TipoDestino