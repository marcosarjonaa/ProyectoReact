import { useEffect, useState } from "react"
import './css/Categorias.css'


const Categorias = ({busquedaCategoria}) => {
    const [categoria, setCategoria] = useState([])
    const [seleccionada, setSeleccionada] = useState(null)


    const fetchCategorias = async () => {
        try {    
            const response = await fetch('http://localhost:3000/category')
            const categorias = await response.json();
            setCategoria(categorias)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategorias()
    }, [])

    const cambioCategorias = (id) => {
        if(seleccionada === id || id === "10") {
            setSeleccionada(null)
            busquedaCategoria(null)
        } else {
            setSeleccionada(id)
            busquedaCategoria(id)
        }
    }


    return (
        <div className="categorias-container">
            <p>Filtrar por categorías</p>
            {categoria.map((cat)=> (
                <div key={cat.id}>
                    <input type="radio" 
                    id={cat.id}
                    name="categoria"
                    checked={seleccionada === cat.id}
                    onChange={() => cambioCategorias(cat.id)} />
                    <label htmlFor={cat.id}>{cat.name}</label>
                </div>
            ))}
        </div>
    )
}

export default Categorias