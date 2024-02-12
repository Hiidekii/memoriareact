import Casilla from "./Casilla"

const Fila = (props) => {
    return <div className="row">
        <Casilla
            data={props.casillas[0]}
            mostrarOnClick={props.mostrarOnClick}
            numFila={props.numFila}
            numColumna={0} />
        <Casilla
            data={props.casillas[1]}
            mostrarOnClick={props.mostrarOnClick}
            numFila={props.numFila}
            numColumna={1} />
        <Casilla
            data={props.casillas[2]}
            mostrarOnClick={props.mostrarOnClick}
            numFila={props.numFila}
            numColumna={2} />
    </div>
}

export default Fila