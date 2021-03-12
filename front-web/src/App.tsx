import './core/assets/styles/custom.scss';
import './app.scss';
import Navbar from './core/components/Navbar';

const App = () => {     // Isso é a mesma coisa que escrever function App(), como no JavaScript
    return(
        <Navbar/>
    );
}

export default App; //Esse comando exporta toda a função const App para o arquivo que o chamar.