import { useContext } from "react"
import MyContext from "../Context/MyContext"
import Hijo22 from "./Hijo22"

const Hijo2 = () => {
    const { restar } = useContext(MyContext)
  return (
    <div>
      <Hijo22 />
      <button onClick={restar}>Restar - 1</button>
    </div>
  )
}

export default Hijo2
