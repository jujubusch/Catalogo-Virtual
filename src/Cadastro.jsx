import { Alert, Button, Box, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';

function Cadastro() {
    
    const [ nome, setNome ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ senha, setSenha ] = useState( "" );
    const [ telefone, setTelefone ] = useState( "" );
    const [ cpf, setCpf ] = useState( "" );
    const [ erro, setErro ] = useState( false );
    const [ cadastro, setCadastro ] = useState( false );
    
    function Cadastrar( evento ) {

        evento.preventDefault();
        fetch( "http://10.139.75.32:8080/users", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                nome: nome,
                email: email,
                senha: senha,
                cpf: cpf,
                telefone: telefone
                
            }
        ) 
    } )
    .then( (resposta) => resposta.json() )
    .then( (json) => { 
        
        if( json.cpf ) {
            setCadastro( true );
            setErro( false )
        } else {
            setErro( true );
            setCadastro( false );
        }
        
    } )
    .catch( ( erro ) => { setErro( true ) } )
    
    }

    useEffect( () => {

        setNome( "" );
        setEmail( "" );
        setSenha( "" );
        setTelefone( "" );
        setCpf( "" );
        setCadastro( false );

    }, [ cadastro ] );

    return (
        <Container component="section" maxWidth="sm">
            <Box sx={{
                mt: 10,
                backgroundColor: "#F4C3D8",
                padding: "50px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
        }}>
            <Typography component="h1" variant='h4'>Cadastrar</Typography>

            { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >Desculpe tente novamente</Alert> ) }
            { cadastro && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }} >Obrigada por se cadastrar</Alert> ) }

            <Box component="form" onSubmit={Cadastrar}>
                <TextField 
                type="text"
                label="Nome*" 
                variant="filled" 
                margin="normal" 
                value={nome}
                onChange={ (e) => setNome( e.target.value ) }
                fullWidth/>
                <TextField 
                type="Email" 
                label="Email*" 
                variant="filled" 
                margin="normal" 
                value={email}
                onChange={ (e) => setEmail( e.target.value ) }
                fullWidth/>
                <TextField 
                type="password" 
                label="Senha*" 
                variant="filled"
                margin="normal"
                value={senha}
                onChange={ (e) => setSenha( e.target.value ) }
                fullWidth/>
                <TextField 
                type="tel" 
                label="Telefone*" 
                variant="filled"
                margin="normal"
                value={telefone}
                onChange={ (e) => setTelefone( e.target.value ) }
                fullWidth/>
                <TextField 
                type="number" 
                label="CPF*" 
                variant="filled"
                margin="normal"
                value={cpf}
                onChange={ (e) => setCpf( e.target.value ) }
                fullWidth/>
                <Button type="submit" variant="contained" fullWidth sx={ { mt: 2, mb: 2 } }>Cadastrar</Button>
            </Box>
        </Box>
        </Container>
  )
}

export default Cadastro;