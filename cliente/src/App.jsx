import { useState, useEffect } from 'react';
import Axios from 'axios';

import './App.css'
import { Container, Row, Col, Form, Button, Table, Modal, ListGroup, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [dados, setDados] = useState([]);
  const [tabelaPlanos, setTabelaPlano] = useState([])
  const [contador, setContador] = useState([])

  // ROTA PRA PEGAR OS DODOS JÁ EXISTENTES DOS PLANOS DE CONTAS NO BANCO DE DADOS
  useEffect(()=> {
    Axios.get("http://localhost:3001/getPlanosCadastrados").then((response) => {
      setTabelaPlano(response.data)
    }).catch((err) => console.log(err))
  }, [contador])

  // ROTA PARA INSERIR OS DADOS DO PLANO DE CONTAS NO BANCO DE DADOS
  const inserirplano = () => {
  Axios.post("http://localhost:3001/cadastrarPlano", {
    data: dados
  }).then((response) => {
    setContador(response);
    // console.log(response)
  }).catch((err) => {
    confirm.log(err)
  }) }

  const inserirDados = (value) => {
    setDados((data) => (
      {
        ...data,
        [value.target.name]: value.target.value,
      }
    ))
  }

  // const addPlano = () => {
  //   setTabelaPlano((data) => [...data, dados])
  // }

  console.log(tabelaPlanos)
  return (
    <>
      <NavBar />
      <Stack direction="vertical" className='Container'>
        <h1>CADASTRO DE PLANO DE CONTAS</h1>
        <Row className='Form'>
          <Col xs={4} as='div' >
            <Table
              responsive
              striped
              bordered
              hover
            >
              <tbody>
                {tabelaPlanos.map((plano) => {
                  return (
                    <tr key={plano.idPlanoContas}>
                      <td >{`${plano.CodigoPlano} ${plano.Tipo}`}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
          <Col xs={5}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Código</Form.Label>
                <Form.Control type="text" placeholder="Digite o código do plano" name="codigo" onChange={inserirDados} value={dados.codido} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Tipo</Form.Label>
                <Form.Control type="text" placeholder="Digite o tipo do plano" name="tipo" onChange={inserirDados} value={dados.codido} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Descrição do plano</Form.Label>
                <Form.Control as="textarea" rows={3} name='descricao' onChange={inserirDados} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Button variant="primary" size="lg" className='Cadastrar' onClick={inserirplano}>
          <Link className='.'> Cadastrar</Link>
        </Button>
      </Stack>
    </>
  )
}

export default App
