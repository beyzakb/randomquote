import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [word,setWord] = useState("");
  const getQuote = () => {
    fetch("http://localhost:3000/data")
    .then((res)=>res.json())
    .then((data)=>{
      let randomNum = Math.floor(Math.random()*data.length)
      setWord(data[randomNum])
    })
  }
  useEffect(()=>{
    getQuote();
  },[])
  return (
    <div className="App">
     <div className='quote'>
      <p>{word.text}</p>
      <p>{word.author}</p>

      <div className='btnCon'>
        <button className='btn' onClick={getQuote}>Söz Getir</button>
      </div>
     </div>
      
    </div>
  );
}

export default App;
