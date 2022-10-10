import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Filme from './Filme.js';

function TelaInicial() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';
    const promise = axios.get(URL);

    promise.then(response => {
      const { data } = response;
      setFilmes(data);
    });

    promise.catch(err => {
      const message = err.response.statusText;
      alert(message);
    });
  }, []);

  function montarFilmesEmExibicao() {
    if (filmes.length > 0) {
      return filmes.map(filme => {
        const { id, posterURL, title } = filme;
        return <Filme key={id} id={id} poster={posterURL} title={title} />;
      });
    } else {
      return <p>Carregando filmes...</p>;
    }
  }

  const filmesEmExibicao = montarFilmesEmExibicao();

  return (
    <div>
      <Container>
        <h1>Selecione o filme</h1>
        <Filmes>
          {filmesEmExibicao}
          {/* {filmes.map(filme => {
            const { id, posterURL, title } = filme;
            return <Filme key={id} id={id} title={title} poster={posterURL} />;
          })} */}
        </Filmes>
      </Container>
    </div>
  );
}

const Filmes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  margin: 70px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    height: 100px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default TelaInicial;