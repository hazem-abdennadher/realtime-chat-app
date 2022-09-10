import styled from 'styled-components';
export const StyledContacts = styled.div`
  display: flex;
  justify-content: space-between;
  height: max-content;
  width: 100%;
  .contacts {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow-x: auto;
    height: max-content;
    border-radius: 1rem 1rem 0 0;
  }
  .hide {
    display: none;
    height: 3rem;
    opacity: 0;
    visibility: none;
  }
  .contact-item {
    width: 100%;
    cursor: pointer;
  }
  .selected {
    background-color: #5e5df077;
  }
  @media screen and (min-width: 768px) {
    min-width: 250px;
    width: 35%;
    height: 100%;
    flex-direction: column;
    .contacts {
      flex-direction: column;
      overflow-x: hidden;
      height: 100%;
      border-radius: 0 0 0rem 1rem;
    }
    .hide {
      display: block;
    }
  }
`;
