import styled from "styled-components";

export const PlayHistory = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
  }

  svg:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;

export const Cell = styled.div`
  text-align: center;

  custom
    font-size: 1.5rem;
    font-weight: bold; {
  }
    
  custom2 {
    font-style: none !important;
    font-weight: light;
    font-size: 0.8rem;
  }
`;