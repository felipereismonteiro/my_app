import { useState } from 'react';

function Card() {
    const [valor, setValor] = useState(0);
    //Adiciona o valor += 1
    function Adicionar() {
        setValor(valor + 1);
    }
    //Remove o valor -= 1
    function Remover() {
        setValor(valor - 1);
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Adiciona e remove</h5>
                    <button onClick={Adicionar} type="button" className="btn btn-primary">Adicionar</button>
                    <button onClick={Remover} type="button" className="btn btn-danger">Remover</button>
                    <p>{valor}</p>
                </div>
            </div>
        </>
    );
}

export default Card;