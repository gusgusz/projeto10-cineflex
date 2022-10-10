import styled from 'styled-components';

function Assento(props) {
  const { id, numero, disponivel, selecionado, aoSelecionar } = props;

  function selecionarAssento() {
    if (!disponivel) alert('Esse assento não pode ser escolhido');
    else aoSelecionar(id, numero);
  }

  return (
    <Posicao
      disponivel={disponivel}
      selecionado={selecionado}
      onClick={selecionarAssento}
    >
      {numero}
    </Posicao>
  );
}

function corAssento(selecionado, disponivel) {
  if (selecionado) return '#8DD7CF';
  else if (disponivel) return '#C3CFD9';
  else return '#FBE192';
}

const Posicao = styled.button`
  width: 26px;
  height: 26px;
  color: var(--cor-fundo-header);
  border: 1px solid #808f9d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selecionado, disponivel }) =>
    corAssento(selecionado, disponivel)};
  cursor: pointer;
  margin: 20px 7px;
  color: #222;
`;

export default Assento;