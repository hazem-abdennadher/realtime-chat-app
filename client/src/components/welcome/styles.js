import styled from 'styled-components';
export const StyledWelcome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .hide {
    height: 3rem;
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  .welcome {
    background-color: #00000076;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0 0 1rem 1rem;

    @media screen and (min-width: 768px) {
      border-radius: 0 0 1rem 0;
    }
    img {
      height: 20rem;
    }
    span {
      color: #4e0eff;
    }
  }
`;
