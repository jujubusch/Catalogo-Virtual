import { useEffect, useState } from "react";
import Menu from "./components/Menu"
import { Container } from "@mui/material";

function App() {

  const[ menu, setMenu ] = useState();
  const[ erro, setErro ] = useState();


  useEffect( () => {

    fetch( process.env.REACT_APP_BACKEND + "menus", {
      headers: {
        "Content-Type": "application/json"
      }
    } )
    .then( ( resposta) => resposta.json() )
    .then( ( json ) => setMenu( json ) )
    .catch( ( erro ) => setErro( true ) )

  }, [] )

function Excluir( evento, id ) {
  evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "menus", {
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        }) 
    } )
    .then( (resposta) => resposta.json() )
    .then( (json) => { 
      const novaLista = menu.filter( ( menu ) => menu._id !== id );
      setMenu( novaLista );
    } )
    .catch( ( erro ) => { setErro( true ) } )
}

  return (
    <>
    <h1>Filmes</h1>
    <Container sx={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap", 
        gap: "2rem"
    }}>
      { filmes && (
      filmes.map( (filme, index ) => (
        <Filme 
        imagem={filme.imagem}
        titulo={filme.titulo}
        descricao={filme.descricao}
        categoria={filme.categoria}
        ano={filme.ano}
        duracao={filme.duracao}
        excluir={ (e) => Excluir( e, filme._id ) }
        id={filme._id}
        />
      ))
    )}
    </Container>
    </>
  );
}

export default App;