import Hijo22 from "./Hijo22"
import { useContext} from "react" // Agregamos el hoot de useContext
import MyContext from "../Context/MyContext" // agregamos el contexto de la constante

const Hijo2 = () => {
    const {contador, restar} = useContext(MyContext)
  return (
    <div>
      <Hijo22 />      
      <button onClick={() => restar(contador - 1 )}>Restar - 1</button>
    </div>
  )
}

export default Hijo2
