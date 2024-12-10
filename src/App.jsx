import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      

  }

  return (
    <div class="content-center">
        <h1>Formulaire</h1>
        <form onsubmit={handleSubmit}>
          <div>
            <label htmlFor="nom">Nom :</label>
            <input type="text" id='nom' value={nom} onChange={(e) => setNom(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input type="email" id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="message"> Message :</label>
            <textarea  id="message" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
          </div>
          <button type='submit'>Envoyer</button>

        </form>

    </div>
      
    
  );
}

export default App
