import { createGlobalStyle } from './index'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
  }
  
  a {
    color: #00e;
  }
  
  a:visited {
    color: #00e;
  }
  
  .button {
    background-color: rgba(0,0,0,0%);
    color: blue;
    border: 0.3ex solid blue;
    border-radius: 1ex;
    padding: 1ex 2ex;
    display: inline-block;
    text-decoration: none;
    margin: 1ex;
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
  }
  
  .button:focus {
    outline: none;
  }
  
  .active {
    background-color: blue;
    color: yellow;  
  }
  
  .secondary {
    font-size: 80%;
  }
`

export default GlobalStyles
