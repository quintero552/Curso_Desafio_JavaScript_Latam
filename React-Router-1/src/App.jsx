import { useContext, useState } from "react"
import Hijo1 from "./component/Hijo1"
import Hijo2 from "./component/Hijo2"
import MyContext from './Context/MyContext' // ademas agregamos o llamamos el contexto de la funcion

const App = () => {

  const [contador, setContador] = useState(0) // Creamos un estado del contador que comience en 0

  const sumar = () => setContador (contador + 1)
  const restar = () => setContador (contador - 1)
  
  const getContador = {
    contador,
    sumar,
    restar
  }

  return (
    <MyContext.Provider value={getContador}>
      {/*MyContext.Provider es para englobal dentro de los componentes y proveer el contador  */}
      <div>
        <Hijo1 />
        <hr />
        <Hijo2 />
      </div>
    </MyContext.Provider>
  )
}

export default App
