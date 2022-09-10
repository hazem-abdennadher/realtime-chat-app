import styled from 'styled-components';
export const StyledLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  font-size: 1.5rem;
  color: #5e5df0;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #5e5df0;
    transform: scale(1.2);
  }
`;
