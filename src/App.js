import { useEffect, useState } from "react";
import Filme from "./components/Filme"
import { Container } from "@mui/material";
import MenuResponsivo from "./MenuResponsivo";
import "./global.css";


function App() {

  const[ produtos, setProdutos ] = useState();
  const[ erro, setErro ] = useState();

/*127.0.0.1:3000*/
  useEffect( () => {

    const usuario = localStorage.getItem( "usuario" ) ;

    fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario , {
      headers: {
        "Content-Type": "application/json"
      }
    } )
    .then( ( resposta) => resposta.json() )
    .then( ( json ) => setProdutos( json ) )
    .catch( ( erro ) => setErro( true ) )

  }, [] )

function Excluir( evento, id ) {
  evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "produtos", {
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            usuario: localStorage.getItem( "usuario" )
        }) 
    } )
    .then( (resposta) => resposta.json() )
    .then( (json) => { 
      const novaLista = produtos.filter( ( menu ) => menu._id !== id );
      setProdutos( novaLista );
    } )
    .catch( ( erro ) => { setErro( true ) } )
}

  return (
    <>
    <MenuResponsivo />
    <h1 className="titulo" >Catálogo dos produtos</h1>
    <Container sx={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap", 
        gap: "2rem"
    }}>
      { produtos && (
         produtos.map( ( produto, index ) => (
        <Filme 
          titulo={produto.nome}
          imagem={produto.imagem}
          decricao={produto.descricao}
          ano={produto.tipo}
          categoria={produto.colecao}
          excluir={ (e) => Excluir( e, produto._id ) }
          id={produto._id}
          />
      ) ) ) }
      
    </Container>
    </>
  );
}

export default App;