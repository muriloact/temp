import React, { useState,useEffect } from 'react';

import './TabelaEscritura.css'
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
import Axios from 'axios'


function TabelaEscritura() {
    const [escritura, setEscritura] = useState(0);
    const [resultadoEscritura, setResultadoEscritura] = useState([]);

    const inserirescritura = (value) => {
        setEscritura(value.target.value)
    }

    console.log(escritura)

    // ROTA QUE VAI BUSCAR A ESCRITURA PELO NUMERO DIGITADO NO BANCO

    useEffect(() =>{
        Axios.get("http://localhost:3001/consultarEscrituraFiscal").then((response) => {
            setResultadoEscritura(response.data)
        }).catch((err) => console.log(err))
    },[])

    return (
        <>
            <NavBar />
            <main className='Container'>
                <h1>MOVIMENTAÇÃO CONTABIL</h1>
                {/* <Form className='Form'>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Nº Escritura Fiscal</Form.Label>
                        <Form.Control type="number" placeholder="Digite o número da escritura aqui." onChange={inserirescritura} />
                    </Form.Group>
                    <Button variant="primary" onClick={buscarescritura}>
                        Buscar
                    </Button>
                </Form> */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nº Lançamento</th>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultadoEscritura.map((escritura) => (
                            <tr key={escritura.idEscrituraFiscal}>
                                <td>{escritura.idEscrituraFiscal}</td>
                                <td>{escritura.NumeroEscrituraFiscal}</td>
                                <td>{escritura.Data}</td>
                                <td>{escritura.Descricao}</td>
                                <td>{escritura.Valor}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </main>
        </>
    );
}

export default TabelaEscritura;