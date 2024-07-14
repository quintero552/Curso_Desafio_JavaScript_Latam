import { useState } from "react"
import MyContext from "./Context/MyContext"
import Hijo1 from "./component/Hijo1"
import Hijo2 from "./component/Hijo2"

const App = () => {
  const [contador, setContador] = useState(0)

  const sumar = () => setContador (contador + 1)
  const restar = () => setContador (contador - 1)

  const getUser = {
    contador,
    sumar,
    restar,
  }

  return (
    <MyContext.Provider value={getUser}>
      <div>
        <h1>Hola Mundo</h1>
        <Hijo1 />
        <hr />
        <Hijo2 />
      </div>
    </MyContext.Provider>
  )
}

export default App
