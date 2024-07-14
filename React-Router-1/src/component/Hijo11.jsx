import { useContext} from "react" // Agregamos el hoot de useContext
import MyContext from "../Context/MyContext" // agregamos el contexto de la constante

const Hijo11 = () => {
    const {contador, sumar} = useContext(MyContext)
    
  return (
    <div>
      <h1>La suma es: <strong>{contador}</strong> desde el Hijo 11</h1>
      <button onClick={() => sumar (contador + 1)}>Sumar + 1</button>     
    </div>
  )
}

export default Hijo11
