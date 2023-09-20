import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link, Rating, Button } from '@mui/material'
import React, { useState } from 'react'


function Filme( props ) {
    
    const[ value, setValue] = useState();

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia 
            component="img"
            height="140"
            image={props.imagem}
            alt={props.nome}
            />
            <CardContent>
                <Typography variant="h3" component="div">
                    {props.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.descricao}
                </Typography>
                <Grid container>
                    <Grid item xs={3}>
                        <span>{props.tipo}</span>
                    </Grid>
                    <Grid item xs={3}>
                        <span>{props.colecao}</span>
                    </Grid>
                    <Grid item xs={3}>
                        <button onClick={props.excluir}>X</button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 2 }} href={ "editar/" + props.id }>Editar</Button>
                    </Grid>
                    <Typography component="legend">Avaliar</Typography>
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                </Grid>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default Filme;