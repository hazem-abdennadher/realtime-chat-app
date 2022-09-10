import styled from 'styled-components';
const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .square {
    margin: auto;
    width: 1rem;
    height: 1rem;
    border: 2px solid #264eca;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));
    animation: loader 6s infinite ease-in-out;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg) scale(1);
    }

    50% {
      transform: rotate(720deg) scale(5);
    }

    100% {
      transform: rotate(0deg) scale(1);
    }
  }
`;
export default StyledLoader;
