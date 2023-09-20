import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function EditaProdutos() {

    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tipo, setTipo] = useState("");
    const [colecao, setColecao] = useState("");
    const [imagem, setImagem] = useState("");
    const [erro, setErro] = useState(false);
    const [editarProdutos, setEditarProdutos] = useState(false);

    useEffect( () => {
        const usuario = localStorage.getItem( "usuario" );
        fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario + "/" + id, {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        .then( (resposta) => resposta.json() )
        .then( (json) => { 

            if( !json.status ) {
                setNome( json.titulo );
                setDescricao( json.descricao );
                setTipo( json.ano );
                setColecao( json.colecao );
                setImagem( json.imagem );
            } else {
                setErro( "Produto não Encontrado" );
            }
        })
        .catch( ( erro ) => { setErro( true ) } )
    }, [] );

    function Editar( evento ) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "produtos", {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
                    titulo: nome,
                    descricao: descricao,
                    ano: tipo,
                    duracao: colecao,
                    imagem: imagem,
                    categoria: "",
                    usuario: localStorage.getItem( "usuario" )                    
                }
            ) 
        } )
        .then( (resposta) => resposta.json() )
        .then( (json) => { 
            
            if( json._id ) {
                setEditarProdutos( true );
                setErro( false )
            } else {
                setErro( true );
                setEditarProdutos( "Produto Não encontrado!" );
            }
            
        } )
        .catch( ( erro ) => { setErro( "Produto Não encontrado!" ) } )
    }

    return (
        <Container component="section" maxWidth="sm">
            <Box sx={{
                mt: 10,
                backgroundColor: "#b3e5fc",
                padding: "50px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>

                <Typography component="h1" variant='h4'>Editar Produto</Typography>
                { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >{erro}</Alert> ) }
                { editarProdutos && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }} >Produto Editado com Sucesso!</Alert> ) }
                <Box component="form" onSubmit={Editar}> 
                    <TextField
                        type="text"
                        label="Nome"
                        variant="filled"
                        margin="normal"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        label="Descrição"
                        variant="filled"
                        margin="normal"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        label="Tipo"
                        variant="filled"
                        margin="normal"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        label="Coleção"
                        variant="filled"
                        margin="normal"
                        value={colecao}
                        onChange={(e) => setColecao(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="url"
                        label="Url da Imagem"
                        variant="filled"
                        margin="normal"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                        fullWidth
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 2 }}>Editar</Button>
                    <Button type="submit" variant="contained" fullWidth href="/" sx={{ mt: 2, mb: 2 }}>Voltar para página inicial</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default EditaProdutos;