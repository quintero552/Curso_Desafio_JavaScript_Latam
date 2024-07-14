import { useContext} from "react"
import MyContext from "../Context/MyContext"

const Hijo22 = () => {
    const {contador} = useContext(MyContext)
  return (
    <div>
      <h1>El numero restante es: {contador}</h1>
    </div>
  )
}

export default Hijo22
