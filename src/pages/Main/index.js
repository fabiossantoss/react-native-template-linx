import React, {useState, useEffect} from 'react';

import {Title} from '~/components';

import {Container} from './styles';

function Main() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    async function getTitle() {
      await setTitle('RN LINX TEMPLATE');
    }

    getTitle();
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Main;
