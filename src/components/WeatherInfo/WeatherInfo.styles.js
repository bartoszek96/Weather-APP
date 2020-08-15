import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ParameterWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
  border-bottom: white solid 2px;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const StyledHeader = styled.header`
  font-size: 2rem;
  font-weight: 700;
`;
