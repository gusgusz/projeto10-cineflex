import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Dia from './Dia.js';

function TelaSessoes() {
  const { filmeId } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`;
    const promise = axios.get(URL);

    promise.then(response => {
      const { data } = response;
      setFilme(data);
    });

    promise.catch(err => {
      const message = err.response.statusText;
      alert(message);
    });
  }, []);

  function montarSessoesPorDia() {
    if (filme !== null) {
      return filme.days.map(dia => {
        const { weekday, date, showtimes, id } = dia;
        return <Dia key={id} dia={weekday} id={id} data={date} sessoes={showtimes} />;
      });
    } else {
      return <p>Carregando ...</p>;
    }
  }

  function montarFooter() {
    if (filme !== null) {
      const { posterURL, title } = filme;

      return (
        <>
          <img src={posterURL} alt={title} />
          <h1>{title}</h1>
        </>
      );
    } else {
      return <></>;
    }
  }

  const sessoesPorDia = montarSessoesPorDia();
  const footer = montarFooter();

  return (
    <Container>
      <h1>Selecione o horário</h1>
      <Dias>{sessoesPorDia}</Dias>
      <Footer>{footer}</Footer>
    </Container>
  );
}

const Dias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  display: flex;
  align-items: center;
  background-color: var(--cor-fundo-footer);
  img {
    width: 48px;
    height: 72px;
    padding: 8px;
    background-color: white;
    border-radius: 2px;
    margin: 10px;
    box-shadow: 0px 2px 4px 0px #0000001a;
    border: 1px solid #9eadba;
  }
  h1 {
    font-size: 26px;
  }
`;

export default TelaSessoes;