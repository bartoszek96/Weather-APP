import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  background: rgba(0, 255, 55, 0.500);
  color: white;
  width: 150px;
  padding: 5px;
  border: 2px solid white;
  border-radius: 0 10px 10px 0;
  line-height: 25px;
  transition: background .5s;
  font-size: 1.2rem;

  &:hover {
    background: rgba(0, 255, 55, 0.700);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 20vw;
  }
`;

export const StyledInput = styled.input`
  width: 50vw;
  padding: 5px;
  border: 2px solid white;
  border-radius: 10px 0 0 10px;
  line-height: 25px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 60vw;
  }
`;
