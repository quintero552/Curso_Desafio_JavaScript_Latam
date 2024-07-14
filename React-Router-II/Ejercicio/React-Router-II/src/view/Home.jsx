import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Home = () => {
  // vamos a crea otro estado para utilizar el estado UseParametrs
  const [poke, setPoke] = useState('')
  console.log('===>>>>>>>>',poke)

  // creamos un nuevo estado llamado UseNvigator para enviar a los usuarios a otra ruta
  const navigator = useNavigate('')
  
  //Creamos la funcion que tomara el hook para agregarlo
  const rutadelnavigator = () => {
    if (poke.trim() === '') return
    navigator(`/pokemones/${poke}`) // redirecciona ala ruta que esta por defecto en el App (layoud)
   
  }



  return (
    <div>
      <h1>HOME</h1>
      <input type="text" value={poke} onChange={(e) => setPoke(e.target.value)} />
      <button onClick={rutadelnavigator}>Ingresa tu Nombre</button>
    </div>
  );
}

export default Home
