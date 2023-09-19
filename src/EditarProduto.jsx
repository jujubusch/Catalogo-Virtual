import { Alert, Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography,Rating } from '@mui/material';
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
        fetch( process.env.REACT_APP_BACKEND + "editar/" + id, {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        .then( (resposta) => resposta.json() )
        .then( (json) => { 

            if( !json.status ) {
                setNome( json.nome );
                setDescricao( json.descricao );
                setTipo( json.tipo );
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
        fetch( process.env.REACT_APP_BACKEND + "editar", {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
                    nome: nome,
                    descricao: descricao,
                    tipo: tipo,
                    colecao: colecao,
                    imagem: imagem                    
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
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Tipos</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tipo}
                            label="Age"
                        >
                        <MenuItem value={1}>Brilho Labial</MenuItem>
                        <MenuItem value={2}>Blush</MenuItem>
                        <MenuItem value={3}>Sombra</MenuItem>
                        <MenuItem value={3}>Delineador</MenuItem>
                        <MenuItem value={3}>Primer</MenuItem>
                        <MenuItem value={3}>Outros...</MenuItem>
                    </Select>
                    </FormControl>

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
                </Box>
            </Box>
        </Container>
    )
}

export default EditaProdutos;