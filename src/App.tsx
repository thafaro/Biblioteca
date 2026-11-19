import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Aulas from "./pages/aulas"
import Desenvolvedor from "./pages/Desenvolvedor"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aulas"element={<Aulas/>}/>
        <Route path="/desenvolvedor"element={<Desenvolvedor/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
