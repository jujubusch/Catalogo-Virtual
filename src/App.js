import { useEffect, useState } from "react";
import Menu from "./components/Menu"
import { Container } from "@mui/material";
import MenuResponsivo from "./MenuResponsivo";
import "./global.css";


function App() {

  const[ menu, setMenu ] = useState();
  const[ erro, setErro ] = useState();
  const[ filmes, setFilmes] =useState();


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
    <MenuResponsivo />
    <h1 className="titulo" >Catálogo dos produtos</h1>
    <Container sx={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap", 
        gap: "2rem"
    }}>
      
    </Container>
    </>
  );
}

export default App;