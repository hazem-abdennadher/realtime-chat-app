import styled from 'styled-components';
export const StyledChatMessages = styled.div`
  background-color: #00000076;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  span {
    color: #4e0eff;
  }
  .no-messages {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.5rem;
  }
  .messages {
    margin: 20px 0;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .message {
      display: flex;
      align-items: center;

      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sent {
      justify-content: flex-end;
      .content {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        background-color: #4f04ff21;
      }
    }
    .received {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;
