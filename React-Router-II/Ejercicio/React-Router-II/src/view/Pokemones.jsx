import { useParams} from "react-router-dom";

const Pokemones = () => {
  const { name } = useParams()

  return (
    <div>
      <p>MI Pokemo.{name}</p>
    </div>
  )
}

export default Pokemones
