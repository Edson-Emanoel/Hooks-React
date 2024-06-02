import {useState} from 'react'

const HookUseState = () => {
  // 1 - useState
    let userName = "Edson";

    const [ name, setName ] = useState("Rodrigo");

    const changeNames = () => {

      userName = "Edson Emanoel"

      setName("Rodrigo Nascimento")

    }
  
  // 2 - useState e input
    const [age, setAge] = useState(18);
    
    const handleSubmit = (e) => {
      e.preventDefault();

      // Envio para API
      console.log(age);
    }

  return <div>
    {/* 1 - useState */}
      <h2>useState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mude os Nomes!</button>
      
    <br />

    {/* 2 - useState e input */}
      <h2>useState e input</h2>
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)} 
        />
        <input type="submit" value="Enviar"/>
      </form>
      <p>Você tem {age} anos!!</p>
      <hr />
  </div>
}

export default HookUseState