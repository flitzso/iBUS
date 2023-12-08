import React from 'react';
import styled from 'styled-components';
import img1 from './imgs/verao.png';

const Image = styled.img`
  width: 100%;
  max-width: 1500px;
  height: auto;
  height: auto;
  margin-top: 20px; /* Adicione a margem superior desejada */
  margin-bottom: 100px; /* Adicione a margem inferior desejada */
`;

const PromoDestino = () => {
  return (
    <div>
      <Image src={img1} alt="Próximo Destino" />
    </div>
  );
};

export default PromoDestino;