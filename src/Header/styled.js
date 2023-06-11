import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.seagull};
  box-shadow: 0px 1px 20px 0px ${({ theme }) => theme.color.black};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.razzmatazz};
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.color.mexicanRed};
  }
`;

export const Timer = styled.p`
  text-align: center;
`;
