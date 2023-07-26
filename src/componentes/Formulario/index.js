import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    

    const [nome, setNome] = useState('')
    const[cidadePais, setCidadePais] = useState('')
    const[imagem, setImagem] = useState('')
    const[tipoDestino, setTipoDestino] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoDestinoCadastrado({
            nome,
            cidadePais,
            imagem,
            tipoDestino
        })
        setNome('')
        setCidadePais('')
        setImagem('')
        setTipoDestino('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}> 
                <h2> Preencha as informações do ponto turistico que deseja visitar </h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome do local" 
                    placeholder="Digite o nome do local" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cidade-Pais da atração" 
                    placeholder="Digite a Cidade-Pais do local onde deseja visitar" 
                    valor={cidadePais}
                    aoAlterado={valor => setCidadePais(valor)}/>

                <CampoTexto 
                    label="Imagem do local" 
                    placeholder="Digite o endereço da imagem do local" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/>
               
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Tipo de destino" 
                    itens={props.tiposDestino} 
                    valor={tipoDestino}
                    aoAlterado={valor => setTipoDestino(valor)}/>

                <Botao>
                    Criar cartão do local
                </Botao>
            </form>
        </section>
    )
}

export default Formulario