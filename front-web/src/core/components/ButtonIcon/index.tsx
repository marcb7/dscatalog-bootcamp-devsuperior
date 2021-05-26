import './styles.scss';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg' // Importar uma imagem

// este é um tipo do typescit para deixar o texto dinâmico
type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <div className="d-inline-flex">
        <button className="btn btn-primary btn-icon">
            <h5>{text}</h5>
        </button>
        <div className="btn-icon-content">
            <ArrowIcon />
        </div>
    </div>
);

export default ButtonIcon;