import styled from 'styled-components';
export const StyledContactCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem;

  &:hover {
    background-color: #5e5df077;
  }

  .card-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #5e5df0;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
    &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #5e5df0;
      bottom: -2px;
      right: -2px;
    }
    &.online {
      &::after {
        background-color: #c3ff99;
      }
    }
  }
  .username {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .username {
      display: unset;
    }
  }
`;
