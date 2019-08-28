import React, {useState, useEffect} from 'react';

import {Container, Title} from './styles';

function Main() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    async function getTitle() {
      await setTitle('RN LINX TEMPLATE');
    }

    getTitle();
  }, [title]);

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Main;
