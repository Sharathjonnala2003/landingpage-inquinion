import styled from 'styled-components';

interface ContainerProps {
  fluid?: boolean;
  small?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  max-width: ${props => 
    props.fluid ? '100%' : 
    props.small ? '768px' : 
    '1280px'
  };
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export default Container;