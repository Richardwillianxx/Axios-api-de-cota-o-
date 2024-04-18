import axios from 'axios'
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Exercicio5 = () => {
    const [api, vejaApi] = useState("");
    const [status, setStatus] = useState({
        variant: "",
        message: "",
       
    });

    const handleApi = (event) => {
        vejaApi(event.target.value);
    };

    const buscarCep = () => {
        axios
            .get(`https://viacep.com.br/ws/${api}/json/`)
            .then(function (response) {
                setStatus({
                    variant: "success",
                    message: "Deu tudo serto )",
                    data: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
                setStatus({
                    variant: "danger",
                    message: "Deu merda",
                });
            });
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="body container">
                        <div className="card-header">
                            <h1 className="text-center">Consultar CEP</h1>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                placeholder="Insira um CEP"
                                className="form-control"
                                type="number"
                                value={api}
                                onChange={handleApi}
                            />
                        </div>
                        <button onClick={buscarCep} className="btn btn-primary">
                            Buscar Cep
                        </button>
                    </div>
                    {status.message && (
                        <Alert variant={status.variant}> {status.message} </Alert>
                    )}






                    <div className="container mt-4">





                        <p>API como JSON:</p>
                        {status.data && <code>{JSON.stringify(status.data)}</code>}
                        <p>CEP:</p>
                        {status.data && <pre>{JSON.stringify(status.data.cep)}</pre>}
                        <p>Logradouro</p>
                        {status.data && <pre>{JSON.stringify(status.data.logradouro)}</pre>}
                        <p>Bairro:</p>
                        {status.data && <pre>{JSON.stringify(status.data.bairro)}</pre>}
                        <p>Localidade</p>
                        {status.data && <pre>{JSON.stringify(status.data.localidade)}</pre>}
                        <p>UF:</p>
                        {status.data && <pre>{JSON.stringify(status.data.uf)}</pre>}
                        <p>IBGE:</p>
                        {status.data && <pre>{JSON.stringify(status.data.ibge)}</pre>}
                        <p>GIA:</p>
                        {status.data && <pre>{JSON.stringify(status.data.gia)}</pre>}
                        <p>DDD:</p>
                        {status.data && <pre>{JSON.stringify(status.data.ddd)}</pre>}
                        <p>siafi</p>
                        {status.data && <pre>{JSON.stringify(status.data.siafi)}</pre>}
                    </div>




                </div>
            </div>
        </>
    );
};

export default Exercicio5;