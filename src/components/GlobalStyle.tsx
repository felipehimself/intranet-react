import styles from '../styles/styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  .global-container {
  max-width: 150rem;
  margin: 2rem 3rem auto 25rem;
  }

  
  body {
    background: #f5f7fb;
  }


  input, button, select {
    font-family: inherit;
  }

  .title {
    color: ${styles.greenColor};
    margin-top: 1.5rem;
  }


`;
export default GlobalStyle;
