import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link } from '@mui/material'
import React from 'react'


function Filme( props ) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia 
            component="img"
            height="140"
            image={props.imagem}
            alt={props.titulo}
            />
            <CardContent>
                <Typography variant="h3" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.descricao}
                </Typography>
                <Grid container>
                    <Grid item xs={3}>
                        <span>{props.categoria}</span>
                    </Grid>
                    <Grid item xs={3}>
                        <span>{props.ano}</span>
                    </Grid>
                    <Grid item xs={3}>
                        <span>{props.duracao}</span>
                    </Grid>
                    <Grid item xs={3}>
                        <button onClick={props.excluir}>X</button>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href={ "edicao/" + props.id }>Editar</Link>
                    </Grid>
                </Grid>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default Filme;