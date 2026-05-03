import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Produtos from "./components/Produtos"
import Contato from "./components/Contato"
import "./App.css"

function App() {
  const [servicoSelecionado, setServicoSelecionado] = useState("")

  return (
    <div>
      <Header />
      <Hero />
      <Produtos selecionarServico={setServicoSelecionado} />
      <Contato servicoSelecionado={servicoSelecionado} />
    </div>
  )
}

export default App