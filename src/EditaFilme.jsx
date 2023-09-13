import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function EditaFilmes() {

    const { id } = useParams();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [erro, setErro] = useState(false);
    const [editarfilmes, setEditarFilmes] = useState(false);

    useEffect( () => {
        fetch( process.env.REACT_APP_BACKEND + "filmes/" + id, {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        .then( (resposta) => resposta.json() )
        .then( (json) => { 

            if( !json.status ) {
                setTitulo( json.titulo );
                setDescricao( json.descricao );
                setAno( json.ano );
                setDuracao( json.duracao );
                setCategoria( json.categoria );
                setImagem( json.imagem );
            } else {
                setErro( "Filme não Encontrado" );
            }
        })
        .catch( ( erro ) => { setErro( true ) } )
    }, [] );

    function Editar( evento ) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "filmes", {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
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
                setEditarFilmes( true );
                setErro( false )
            } else {
                setErro( true );
                setEditarFilmes( "Filme Não encontrado!" );
            }
            
        } )
        .catch( ( erro ) => { setErro( "Filme Não encontrado!" ) } )
    }

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

                <Typography component="h1" variant='h4'>Editar Filme</Typography>
                { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >{erro}</Alert> ) }
                { editarfilmes && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }} >Filme Editado com Sucesso!</Alert> ) }
                <Box component="form" onSubmit={Editar}> 
                    <TextField
                        type="text"
                        label="Título"
                        variant="filled"
                        margin="normal"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
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
                        type="year"
                        label="Ano"
                        variant="filled"
                        margin="normal"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        type="text"
                        label="Duração( em horas )"
                        variant="filled"
                        margin="normal"
                        value={duracao}
                        onChange={(e) => setDuracao(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        label="Categoria"
                        variant="filled"
                        margin="normal"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
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
                </Box>
            </Box>
        </Container>
    )
}

export default EditaFilmes;