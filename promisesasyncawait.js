// "dev": "babel ./src/main.js -o ./bundle.js -w",


import './App.css';
import React, { useEffect, useState } from "react";

export default function App() {
  const [ imagem, setImagem ] = useState(null);
  useEffect(() => {
    obterImagem();
    document.addEventListener("teste", () => {
      document.body.style.backgroundColor = "#3e4";
    });
  }, []);

  const requisitar = () => new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if(error) {
        return reject({estado: false});
      }else {
        return resolve({estado: true});
      }
    }, 3000);
  });

  const obterImagem = () => {
    requisitar()
    .then(() => {
      const event = new Event('teste');
      document.dispatchEvent(event);
    })
    console.log("here");
  }

  

  return (
    <div className="App">
      <section className="container">
        <h1>Teste de API</h1>
        <img src={imagem} alt="sem imagem" />
      </section>
    </div>
  );
}