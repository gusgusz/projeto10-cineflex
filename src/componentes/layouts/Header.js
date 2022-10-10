
import styled from 'styled-components';

function Header() {
  return (
    <Titulo>
      <h1>CineFlex</h1>
    </Titulo>
  );
}

const Titulo = styled.div`
  background-color: var(--cor-fundo-header);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 34px;
    text-transform: uppercase;
    color: var(--cor-laranja);
  }
`;

export default Header;