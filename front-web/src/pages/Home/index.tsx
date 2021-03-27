import './styles.scss';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg'
import ButtonIcon from '../../core/components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        <div className="row home-content card-base border-radius-20">
            <div className="col-6">
                <h1 className="text-title">
                    Conheça o melhor <br /> catálogo de produtos
                    </h1>
                <p className="text-subtitle">
                    Ajudaremos você a encontrar os melhores <br /> produtos disponíveis no mercado.
                </p>
                <Link to="/catalog">
                    <ButtonIcon text="inicie agora a sua busca" />
                </Link>
            </div>
            <div className="col-6">
                <MainImage className="main-image" />
            </div>
        </div>
    </div>
);

export default Home;

// Atalho para criar uma nova <div> -> Ex: digite .home-content e aperte a tecla tab. Cria a nova div <div className="home-content"></div>

// Importando imagens -> {ReactComponent as MainImage} é a forma mais comum de importar imagens usando o create-react-app, que é o instalador do nosso projeto React.

// <br/> -> break line (quebra de linha)


// Para que um botão leve a outra página, é só encapsula-lo usando o componente <Link><Link/> e passar a rota usando a propriedade 'to'. Ex: <Link to="/coloque aqui a rota">