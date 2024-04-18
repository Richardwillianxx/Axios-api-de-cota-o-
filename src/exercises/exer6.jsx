import axios from 'axios'
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

function Cotacao(){

    const [valor, setValor] = useState("");
    const [status, setStatus] = useState({
        variant: "",
        message: "",
        });
    const [cotacaoData, setCotacaoData] = useState("");
    const [json, setJson] = useState("");
  
    const [moeda1, setMoeda1] = useState("");
    const [moeda2, setMoeda2] = useState("");


function MudandoValor(value) {
    setValor(value.target.value);
};

function MudarUm(value){
    setMoeda1(value.target.value)
}

function MudarDois(value){
    setMoeda2(value.target.value)
}
  


function VerValor(){
axios.get(`https://economia.awesomeapi.com.br/last/${moeda1}-${moeda2}`)



.then(function (response) {
       setCotacaoData(response.data[moeda1+moeda2].bid );
       setStatus({variant: "success", message: "Deu tudo certo "   });
       setJson(response.data); // Armazena os dados da cotação no estado
 })

.catch(function (error) {
    console.log(error);
    setStatus({variant: "danger", message: "Deu ruim" });
 });


}return(
        <div className="card">
        <div className="body container">
                        <div className="card-header">
                            <h1 className="text-center">Conversão de Real para Dólar: </h1>
                        </div>
    <div>
        <select  className="form-select mb-2" onChange={MudarUm} >
            <option selected> selecione o par 1</option>
            <option value="BRL">BRL</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
        <select  className="form-select mb-2" onChange={MudarDois} >
            <option selected> selecione o par 2</option>
            <option value="BRL">BRL</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
    </div>








                        <div className="input-group mb-3">
                            <input
                                placeholder="Digite o valor que sera convertido" className="form-control"
                                type="number" value={valor} onChange={MudandoValor}
                            />

                        </div>
                        <button onClick={VerValor} className="btn btn-primary">
                           Buscar conversão
                        </button>
                    </div>
                  
                    {status.message && (
                        <Alert variant={status.variant}> {status.message} </Alert>
                    )}

<div className="container mt-4">
 {cotacaoData && (


                <div className="container mt-4">
                    
                    <h6> Moeda 1:</h6>
                    <pre>{moeda1}</pre>

                    <h6> Moeda 2:</h6>
                    <pre>{moeda2}</pre>


                    <h6> Cotação:</h6>
                    <pre>{JSON.stringify(cotacaoData, null, 2)}</pre>


                    <h6> Valor convertido:</h6>
                    <pre>{cotacaoData * valor}</pre>

                    <h6> Teste</h6>
                    <pre>{moeda1+moeda2}</pre>
                    
                </div>

                



    )}
                        
   </div>
   </div>
  
    );
}export default Cotacao;