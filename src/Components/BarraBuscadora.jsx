
import './css/BarraBuscadora.css'

const BarraBuscadora = ( {buscarJuegos, setBuscarJuegos, juegoBuscado} ) => {
    return(
        <div className="barraBuscadora">
            <label className="barraBuscadora-label">Busca un videojuego</label>
            <input type="text" name="juegoBuscado" 
                className="barraBuscadora-input" 
                value={juegoBuscado}
                onChange={(e) => setBuscarJuegos(e.target.value)}/>
            {
            }
        </div>
    )
}

export default BarraBuscadora;