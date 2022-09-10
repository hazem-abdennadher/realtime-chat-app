import styled from 'styled-components';
export const StyledChatHeader = styled.div`
  width: 100%;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  background-color: #00000076;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    .chat-header-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #5e5df0;
      }
      &::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
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
  }
`;
