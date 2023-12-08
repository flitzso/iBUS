import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px; /* Adicione a margem superior desejada */
  margin-bottom: 100px; /* Adicione a margem inferior desejada */
`;

const StyledContainer = styled.div`
  border-radius: 5px; /* Adicione o border-radius desejado */
  background-color: #800080;
`;

const StyledCard = styled(Card)`
  width: 18rem;
  height: 110px; /* ou a altura desejada */
  margin: 3px; /* ou a margem desejada */
  margin-top: 10px; /* Adicione a margem superior desejada */
  border-radius: 5%; /* Adiciona o arredondamento das bordas */
  /* Adicione outros estilos conforme necessário */
`;

const StyledFormButton = styled(Form)`
button {
    background-color: orange; /* Cor laranja */
    color: white;
    border-radius: 10%; /* Border radius de 10% */
    /* Adicione outros estilos conforme necessário */
    transition: background-color 0.3s ease; /* Adiciona uma transição suave */
  }

  /* Efeito hover para o botão */
  button:hover {
    background-color: darkorange; /* Cor laranja mais escura no hover */
    /* Adicione outros estilos de hover conforme necessário */
  }
`;

const ViagemForm = () => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [dataIda, setDataIda] = useState('');
  const [dataVolta, setDataVolta] = useState('');
  const [numPassageiros, setNumPassageiros] = useState(1);
  const [tipoViagem, setTipoViagem] = useState('idaVolta');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com os dados do formulário, por exemplo, enviar para o servidor.
    console.log('Origem:', origem);
    console.log('Destino:', destino);
    console.log('Data de Ida:', dataIda);
    console.log('Data de Volta:', dataVolta);
    console.log('Número de Passageiros:', numPassageiros);
    console.log('Tipo de Viagem:', tipoViagem);
  };

  return (
    <StyledContainer>
        <h1 className='text-light'>Passagens</h1>
     <Form>
      <Form.Group className="mb-3 form-check d-flex text-light">
        <Form.Check type="checkbox" id="exampleCheck1" label="Ida e Volta" className="me-3" />
        <Form.Check type="checkbox" id="exampleCheck2" label="Ida" className="me-3" />
        <Form.Check type="checkbox" id="exampleCheck3" label="Multidestino" />
      </Form.Group>
    </Form>
      <StyledFlexContainer>
        <StyledCard>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Origem:</Form.Label>
                <Form.Control
                  type="text"
                  value={origem}
                  onChange={(e) => setOrigem(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </StyledCard>

        <StyledCard>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Destino:</Form.Label>
                <Form.Control
                  type="text"
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </StyledCard>

        <StyledCard>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Data de Ida:</Form.Label>
                <Form.Control
                  type="date"
                  value={dataIda}
                  onChange={(e) => setDataIda(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </StyledCard>

        <StyledCard>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Data de Volta:</Form.Label>
                <Form.Control
                  type="date"
                  value={dataVolta}
                  onChange={(e) => setDataVolta(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </StyledCard>

        <StyledCard>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Número de Passageiros:</Form.Label>
                <Form.Control
                  type="number"
                  value={numPassageiros}
                  onChange={(e) => setNumPassageiros(e.target.value)}
                  min="1"
                  required
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </StyledCard>
        <StyledFormButton>
          <button type="submit">Buscar</button>
        </StyledFormButton>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

export default ViagemForm;





