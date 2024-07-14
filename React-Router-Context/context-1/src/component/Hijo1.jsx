import { useContext} from "react"
import MyContext from "../Context/MyContext"
import Hijo11 from "./Hijo11"

const Hijo1 = () => {
    const {contador} = useContext(MyContext)

  return (
    <div>
      <h1>El numero sumatorio es: {contador}</h1>
      <Hijo11 />
    </div>
  )
}

export default Hijo1
