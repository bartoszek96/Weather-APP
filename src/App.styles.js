import styled, { keyframes } from 'styled-components';

const backgroundMove = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
`;

export const StyledMain = styled.main`
  background: linear-gradient(90deg, rgba(0,88,130,1) 0%, rgba(150,70,194,1) 0%, rgba(0,169,203,1) 100%);
  background-size: 500%;
  animation: ${backgroundMove} 10s linear infinite;
  min-height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.20);
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
`;

export const StyledHeader = styled.header`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const StyledError = styled.section`
  font-size: 1.6rem;
  padding: 10px;
  color: rgb(255, 40, 40);
  text-align: center;
`;
