import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // import necessário para que esse arquivo index.tsx enxergue o componente const App do arquivo App.tsx
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(  // Esse ReactDOM.render está criando a aplicação React, e o h1 é o elemnto que vai ser criado lá dentro.
  <App/>,
  document.getElementById('root') // Esse elemento 'root' vem da linha <div id="root"></div> do index.html. É nessa <div> que toda a aplicação estará rodando dentro.
  // O ReactDOM.render renderiza algo (o elemento h1), nessa <div> 'root'.
);
