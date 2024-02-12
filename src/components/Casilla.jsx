const Casilla = (props) => {
    const casillaOnClick = (event) => {
        props.mostrarOnClick(props.numFila, props.numColumna)
    }

    return <div className="col">
        <button className="btn btn-light" type="button"
            dangerouslySetInnerHTML={
                props.data.mostrandoSimbolo === true ? { __html: props.data.simbolo } : { __html: "UL" }
            }
            onClick={casillaOnClick}>
        </button>
    </div>
}

export default Casilla