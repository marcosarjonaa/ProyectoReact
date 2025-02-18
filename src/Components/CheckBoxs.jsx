import { useState } from "react";
import Categorias from './Categorias.jsx'
import Plataformas from './Plataformas.jsx'
import './css/Checkbox.css'

const CheckBoxs = ({busquedaCategoria, busquedaPlataforma}) => {
    const [filtros, setFiltros] = useState({
        categoria: false,
        plataforma: false,
    })

    const toggle = (filtro) => {
        setFiltros((prev) => ({ ...prev, [filtro]: !prev[filtro] }));
    }

    return (
        <div>
            <button onClick={() => toggle("categoria")}>
                {filtros.categoria ? "Esconder categoria": "Mostrar categorías"}
            </button>
            <div>
                {filtros.categoria && <Categorias busquedaCategoria={busquedaCategoria} />}
            </div>
            <button onClick={() => toggle("plataforma")}>
                {filtros.plataforma ? "Esconder plataforma": "Mostrar plataformas"}
            </button>
            <div>
                {filtros.plataforma && <Plataformas busquedaPlataforma={busquedaPlataforma} />}
            </div>
        </div>
    )
}

export default CheckBoxs

