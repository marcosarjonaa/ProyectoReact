import { useEffect, useState } from "react";
import './css/Plataformas.css'; 


const Plataformas = ({ busquedaPlataforma }) => {
    const [plataformas, setPlataforma] = useState([]);
    const [seleccionada, setSeleccionada] = useState(null);

    const fetchPlataforma = async () => {
        try {
            const response = await fetch('http://localhost:3000/platforms');
            const plataforma = await response.json();
            setPlataforma(plataforma);
        } catch (error) {
            console.log("Error fetching platforms:", error);
        }
    };

    useEffect(() => {
        fetchPlataforma();
    }, []);

    const cambioPlataformas = (id) => {
        if (id == "10") {
            fetchPlataforma();
        } else if (seleccionada === id) {
            setSeleccionada(null);
            busquedaPlataforma(null);
        } else {
            setSeleccionada(id);
            busquedaPlataforma(id);
        }
    };

    
    return (
        <div className="plataformas-container"> {/* Clase añadida aquí */}
            <p>Filtrar por plataformas</p>
            {plataformas.map((plataforma) => (
                <div key={plataforma.id}>
                    <input
                        type="radio"
                        id={plataforma.id}
                        name="plataforma"
                        checked={seleccionada === plataforma.id}
                        onChange={() => cambioPlataformas(plataforma.id)}
                    />
                    <label htmlFor={plataforma.id}>{plataforma.name}</label>
                </div>
            ))}
        </div>
    );
};

export default Plataformas;