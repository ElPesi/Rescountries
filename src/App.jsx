import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [pais, setPais] = useState("");
  const getCountry = () => {
    fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then(response => response.json())
      .then(data => setName(data[0]))
  };
  const handleText = (e) => {
    setPais(e.target.value)
  }

  const handlePais = (e) => {
    e.preventDefault()
    getCountry()
  }

  return (
    <div>
      <form onSubmit={handlePais}>
        <input
        type='text'
        value={pais}
        onChange={handleText}></input>
        <button type='submit'>buscar pais</button>
      </form>
      {name && (
        <div>
          <p>Nombre del Pais</p>
          <h1>{name.name.common}</h1>
          <p>Idiomas:</p>
          <ul>
            {Object.entries(name.languages).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
          <img src={name.flags.svg} alt="" width="100"/>
        </div>
      )}
    </div>
  );
}

export default App
