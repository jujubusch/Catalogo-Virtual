function ExibeNota( props )
{
    function ExibeNota ()
  {
    alert( "Sua Média Geral foi " + props.nota );
  }
    return(
        <div>
      <h1>{props.mensagem}</h1>
      <button onClick={ExibeNota}>Veja Sua Nota</button>
    </div>
    )
}
export default ExibeNota;