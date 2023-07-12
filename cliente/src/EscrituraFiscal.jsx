import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import NavBar from './components/NavBar';
import Axios from 'axios'

function EscrituraFiscal() {
    const [dados, setDados] = useState([]);

    const inserirDados = (value) => {
        setDados((data) => (
            {
                ...data,
                [value.target.name]: value.target.value,
            }
        ))
    }

    // ROTA PARA INSERIR OS DADOS DA ESCRITURA FISCAL NO BANCO DE DADOS
    const inserirescritura = () => {
    Axios.post("http://localhost:3001/cadastrarEscrituraFiscal", {
      data: dados
    }).then((response) => {
      console.log(response)
    }).catch((err) => {
      confirm.log(err)
    }) }

    return (
        <div>
            <NavBar />
            <Stack direction="vertical" className='Container'>
                <h1>Escritura Fiscal</h1>
                <Form>
                    <Row>
                        <Row>
                            <Col xs={4} >
                                <Form.Group className="mb-3" >
                                    <Form.Label>Nº Escritura Fiscal</Form.Label>
                                    <Form.Control type="number" placeholder="Digite o número da escritura aqui." name='escritura' onChange={inserirDados} />
                                </Form.Group>
                            </Col>
                            <Col xs={3}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Data</Form.Label>
                                    <Form.Control type="date" name='data' onChange={inserirDados} />
                                </Form.Group>
                            </Col>
                            <Col xs={5} >
                                <Form.Group className="mb-3" >
                                    <Form.Label>Valor</Form.Label>
                                    <Form.Control type="number" placeholder="Digite o valor aqui." name='valor' onChange={inserirDados} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Col xs={8}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Descrição da Nota</Form.Label>
                                <Form.Control as="textarea" rows={3} name='descricao' onChange={inserirDados} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="ContainerBotao">
                        <Button variant="success" size="lg" className='Cadastrar' onClick={inserirescritura}>
                            Cadastrar
                        </Button>
                        {/* <Button variant="danger" size="lg" className='Cadastrar'>
                            Buscar
                        </Button> */}
                    </Row>
                </Form>
            </Stack>
        </div>
    );
}

export default EscrituraFiscal;