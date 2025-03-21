import { useState } from "react"

function App(){

  const [nome,setNome] = useState('ronaldo')

  return (
    <div>
      <h3>Pizarria 2D</h3>

      <input
       className="nome"
       onChange={(e)=>{setNome(e.target.value)}}
       type="text"/>

       <button
        className="botao"
        onClick={()=>{alert(nome)}}
        >
          CLIQUE AQUI
        </button>

      </div>
  )
}

export default App