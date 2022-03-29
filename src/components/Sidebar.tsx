import styled from 'styled-components';
import styles from '../styles/styles';
import {
  IoHomeSharp,
  IoNewspaper,
  IoDocumentText,
  IoDocumentAttach,
  IoPerson,
  IoSettingsSharp,
  IoLogOut,
} from 'react-icons/io5';

import { IconContext } from 'react-icons';
const Sidebar = () => {
  return (
    <Wrapper>
      <IconContext.Provider value={{ className: 'icons-class' }}>
        <ul>
          <li>
            <a href=''>
              <IoHomeSharp />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href=''>
              <IoNewspaper />
              <span>Notícias</span>
            </a>
          </li>
          <li>
            <a href=''>
              <IoDocumentText />
              <span>Documentos</span>
            </a>
          </li>
          <li>
            <a href=''>
              <IoDocumentAttach />
              <span>Formulários</span>
            </a>
          </li>
          <li>
            <a href=''>
              <IoPerson />
              <span>Gestão de Pessoas</span>
            </a>
          </li>
          <li>
            <a href=''>
              <IoSettingsSharp />
              <span>Configurações</span>
            </a>
          </li>
          <li>
            <a href=''>
              <IoLogOut />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </IconContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 22rem;
  background-color: #fff;
  border-top-right-radius: 10%;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
  }

  ul li > * {
    color: #004b92;
    transition: all 0.5s ease;
  }

  ul li:hover > * {
    color: #fff;
  }

  li {
    width: 100%;
    padding: 0.8rem 0.8rem;
    border-radius: 0.5rem;
  }

  li:hover {
    background-color: #034079;
    color: #fff;
    transition: all 0.5s ease;
  }

  li:not(:last-child) {
    margin-bottom: 1.3rem;
  }

  li span {
    font-size: 1.6rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
  }

  .icons-class {
    font-size: 1.6rem;
  }
`;
export default Sidebar;