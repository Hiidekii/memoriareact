import Fila from "./Fila"

const Tablero = (props) => {
    return <div>
        <Fila
            casillas={props.listaCasillas[0]}
            mostrarOnClick={props.mostrarOnClick}
            numFila={0} />
        <Fila
            casillas={props.listaCasillas[1]}
            mostrarOnClick={props.mostrarOnClick}
            numFila={1} />
    </div>
}

export default Tablero