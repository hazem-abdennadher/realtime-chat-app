import styled from 'styled-components';
const StyledAvatars = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }

  .avatars-container {
    width: 90%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .avatar {
      border: 2px dotted transparent;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        object-fit: cover;
        transition: 0.5s ease-in-out;
      }
      &:hover {
        border: 2px dotted #5e5df0;
      }
    }
    .selected {
      border: 2px solid #5e5df0;
      &:hover {
        border: 2px solid #5e5df0;
      }
    }
  }
  button {
    text-transform: uppercase;
    background-color: transparent;
    padding: 0.5rem;
    width: 80%;
    outline: none;
    border-radius: 10px;
    border: 2px solid #5e5df0;
    color: #5e5df0;
    font-size: 19px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #5e5df0;
      color: #fff;
    }
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 24px;
    }
    .avatars-container {
      width: 100%;
      height: 300px;
      gap: 1rem;
      .avatar {
        img {
          height: 8rem;
        }
      }
    }
  }
`;
export default StyledAvatars;
