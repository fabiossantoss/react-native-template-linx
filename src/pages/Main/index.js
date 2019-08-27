import React, {useState, useEffect} from 'react';

import {Container, Title} from './styles';

function Main() {
  //state local
  const [title, setTitle] = useState('');

  //ciclo de vida da aplicação, executar ao carregar o component
  useEffect(() => {
    async function getTitle() {
      await setTitle('RN LINX TEMPLATE');
    }

    //executar o effect
    getTitle();
  }, [title]);

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Main;
