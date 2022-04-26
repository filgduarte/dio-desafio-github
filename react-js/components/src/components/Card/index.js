import {useState} from 'react';
import Button from '../Button';

const Card = () => {
    const [valor, setValor] = useState(0);

    function Adicionar() {
        setValor(valor + 1);
    }

    function Remover() {
        setValor(valor - 1);
    }

    return (
        <div className="card mt-3">
            <div className="card-header">
                Meu Card
            </div>
            <div className="card-body">
                <Button
                    styleName="success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>
                &nbsp;
                <Button
                    styleName="danger"
                    onClick={Remover}
                >
                    Remover
                </Button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;