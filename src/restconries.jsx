import { useState } from 'react'
import 'restconries.css'

function App() {
    const [dogImage, setDogImage] = useState("");
    const getImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => { setDogImage(data.message) })
    };
    return (
    <div>
    <button onClick={getImage}>New dog image</button>
    <br></br>
    <img alt='Dog' src={dogImage} />
    </div>
    );
}