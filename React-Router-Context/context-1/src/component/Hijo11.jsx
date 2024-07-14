import { useContext } from "react" // se agrega UseContext para consumir el MyContext
import MyContext from "../Context/MyContext"

const Hijo11 = () => {

    const {sumar} = useContext(MyContext)

  return (
    <div>
      <button onClick={sumar}>Sumar + 1</button>
    </div>
  )
}

export default Hijo11
