import styled from "styled-components";

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.text};
`;

export const Credit = styled.span`
  color: ${({ theme }) => theme.text};
  font-style: italic;
  font-size: 12px;
`;
