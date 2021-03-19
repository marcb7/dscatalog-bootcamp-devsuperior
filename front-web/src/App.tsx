import './core/assets/styles/custom.scss';
import './app.scss';
import Routes from './Routes';

const App = () => {     // Isso é a mesma coisa que escrever function App(), como no JavaScript
    return(
        <Routes/>
    );
}

export default App; //Esse comando exporta toda a função const App para o arquivo que o chamar.