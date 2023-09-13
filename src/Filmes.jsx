import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';

function Filmes() {

    const [ titulo, setTitulo ] = useState( "" );
    const [ descricao, setDescricao ] = useState( "" );
    const [ ano, setAno ] = useState( "" );
    const [ duracao, setDuracao ] = useState( "" );
    const [ categoria, setCategoria ] = useState( "" );
    const [ imagem, setImagem ] = useState( "" );
    const [ erro, setErro ] = useState( false );
    const [ cadastrofilmes, setCadastroFilmes ] = useState( false );

    function CadastrarFilmes( evento ) {

        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "filmes", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                titulo: titulo,
                descricao: descricao,
                ano: ano,
                duracao: duracao,
                categoria: categoria,
                imagem: imagem
                
            }
        ) 
    } )
    .then( (resposta) => resposta.json() )
    .then( (json) => { 
        
        if( json._id ) {
            setCadastroFilmes( true );
            setErro( false )
        } else {
            setErro( true );
            setCadastroFilmes( false );
        }
        
    } )
    .catch( ( erro ) => { setErro( true ) } )
    
    }

    useEffect( () => {

        setTitulo( "" );
        setDescricao( "" );
        setAno( "" );
        setDuracao( "" );
        setCategoria( "" );
        setImagem( "" );

    }, [ cadastrofilmes ] );

  return (
   <Container component="section" maxWidth="sm">
        <Box sx={{
            mt: 10,
            backgroundColor: "#F4C3D8",
            padding: "50px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
    }}>
       
        <Typography component="h1" variant='h4'>Cadastrar Filme</Typography>   
        { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >Filme já cadastrado, Tente novamnte por favor!</Alert> ) }
        { cadastrofilmes && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }} >Obrigada por cadastrar o seu filme!</Alert> ) }
        <Box component="form" onSubmit={CadastrarFilmes}>
        <TextField
            type="text"
            label="Título" 
            variant="filled" 
            margin="normal" 
            value={titulo}
            onChange={ (e) => setTitulo( e.target.value ) }
            fullWidth
            />
            <TextField 
            type="text"
            label="Descrição" 
            variant="filled" 
            margin="normal" 
            value={descricao}
            onChange={ (e) => setDescricao( e.target.value ) }
            fullWidth
            />
            <TextField 
            type="date"
            label="Ano" 
            variant="filled" 
            margin="normal" 
            value={ano}
            onChange={ (e) => setAno( e.target.value ) }
            fullWidth
            />
            
            <TextField 
            type="time"
            label="Duração( em horas )" 
            variant="filled" 
            margin="normal" 
            value={duracao}
            onChange={ (e) => setDuracao( e.target.value ) }
            fullWidth
            />
            <TextField 
            type="text"
            label="Categoria" 
            variant="filled" 
            margin="normal" 
            value={categoria}
            onChange={ (e) => setCategoria( e.target.value ) }
            fullWidth
            />
            <TextField 
            type="url"
            label="Url do Filme" 
            variant="filled" 
            margin="normal" 
            value={imagem}
            onChange={ (e) => setImagem( e.target.value ) }
            fullWidth
            />
            <Button type="submit" variant="contained" fullWidth sx={ { mt: 2, mb: 2 } }>Editar</Button>
        </Box>
    </Box>
   </Container>


  )
}

export default Filmes;