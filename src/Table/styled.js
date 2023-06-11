import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  overflow-x: auto;
`;

export const TableWrapper = styled.table`
  width: 700px;
  border-collapse: collapse;
  margin: 20px auto;
  box-shadow: 0 1px 10px ${({ theme }) => theme.color.black};
  text-align: center;
`;

export const Caption = styled.caption`
  padding-bottom: 10px;
  text-transform: uppercase;
`;

export const Cell = styled.th`
  border: 1px solid ${({ theme }) => theme.color.black};
  width: 33.33%;
  background-color: ${({ theme }) => theme.color.mercury};

  ${({ red }) =>
    red &&
    css`
      background-color: ${({ theme }) => theme.color.crimson};
      color: ${({ theme }) => theme.color.white};
    `}

  ${({ fairy }) =>
    fairy &&
    css`
      background-color: ${({ theme }) => theme.color.alto};
      color: ${({ theme }) => theme.color.crimson};
    `}
`;
