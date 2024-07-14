import { useContext} from "react" // Agregamos el hoot de useContext
import MyContext from '../Context/MyContext' // ademas agregamos o llamamos el contexto de la funcion

const Hijo22 = () => {
    const {contador} = useContext(MyContext)
  return (
    <div>
      <h1>La suma es: <strong>{contador}</strong> desde el Hijo 22</h1>
    </div>
  )
}

export default Hijo22
