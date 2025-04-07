import { useState } from "react"

function App(){

  

  const Formulario = (props) => {
    
    const [nome, setNome] = useState()

    return (
      <div>
        <h3>{props.titulo}</h3>
        <input className="nome"
        placeholder="Digite seu nome..."
        onChange={(e)=>{setNome(e.target.value)}}
        name="nome"
        type="text" />
        <button className="botao" onClick={
                ()=> { 
                  if(nome.length > 0)
                    alert(nome)
                  else
                    alert(props.mensagen)
            }
          }>
         CLIQUE AQUI
        </button>
      </div>
    )
  }

  return(
    <div>
      <h3>Pizzaria 2B</h3>
      <Formulario titulo = "Nome"  mensagen = "Nos vamos presisar do seu Nome"/>
      <Formulario titulo = "E-mail" mensagen = "Nos vamos presisar do seu E-mail"/>
      <Formulario titulo = "CPF" mensagen = "Nos vamos presisar do seu CPF"/>
      <Formulario titulo = "Telefone" mensagen = "Nos vamos presisar do seu Telefone"/>
      <Formulario />
      <Formulario />
      <Formulario />
    </div>
  )
}

export default App