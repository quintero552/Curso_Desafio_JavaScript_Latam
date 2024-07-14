import { Routes, Route } from "react-router-dom";
import { Pokemones, Home, Contactanos, NotFound } from "./view";
import Navar from "./components/Navar";

const App = () => {
  return (
    <>
      <Navar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/pokemones/:name" element={<Pokemones />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  );
}

export default App
