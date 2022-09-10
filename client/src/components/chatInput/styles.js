import styled from 'styled-components';
export const StyledChatInput = styled.div`
  .chat-input-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 3rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 1rem 1rem;
    width: 100%;

    svg {
      font-size: 1.5rem;
      cursor: pointer;
    }
    .chat-input {
      flex-grow: 1;
      height: 2rem;
      border: none;
      border-radius: 10px;
      padding: 0 0.5rem;
      font-size: 1rem;
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
      &:focus {
        outline: none;
      }
    }
    .emoji-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 0.5rem;
      position: relative;

      .emoji-picker-react {
        position: absolute;
        bottom: 3rem;
        right: 0;
      }
    }
    .send-btn {
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
      color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 1.4rem;
      }
    }
  }
`;
