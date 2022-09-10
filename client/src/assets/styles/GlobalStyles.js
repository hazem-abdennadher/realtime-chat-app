import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.register-form,
.login-form {
    height: 100%;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 21px;
    padding: 0 20px;

    .brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      text-align: center;
      h1{
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 62px;
      }
      p {
        font-weight: 700;
        font-size: 14px;
        line-height: 23px;
      }
      margin-bottom: 1rem;
    }
    .form-item {
      padding: 0.5rem;
      width: 100%;
      outline: none;
      border-radius: 10px;
      border: 2px solid white;
      display: flex;
      justify-content: flex-start;
      gap: 15px;
      align-items: center;
    }

    .icon {
      font-size: 1.5rem;
      font-weight: 700;
    }
    button.submit  {
    text-transform: uppercase;
    background-color: transparent;
    padding: 0.5rem;
    width: 100%;
    outline: none;
    border-radius: 10px;
    border: 2px solid #00ff29;
    color: #00ff29;
    font-size: 19px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
      
  }
    
    .type-text {
      background-color: transparent;
      border: none;
      outline: none;
      font-weight: 700;
      color: white;
      font-size: 15px;
    }
    .type-text::placeholder {
      color: white;
    }

    span {
      white-space: nowrap;
      font-style: italic;
      font-weight: 400;
      font-size: 18px;
      cursor: default;
      a {
        color: #318abc;
        font-weight: bold;
      }
    }
  }
  .chat-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    height:95vh;
    width:95vw;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      height:85vh;
      width:85vw;
    }
  }
  @media screen and (min-width: 768px) {
    
    form{
        width: 433px;
    .brand {
        gap:1rem;
      h1{
        font-size: 48px;
        line-height: 62px;
      }
      p {
        font-size: 18px;
      }
      margin-bottom: 2rem;
    }
  
    .form-item{
        gap: 25px;
    }
    .icon {
      font-size: 2rem;
    }
    }
  }
  



`;
