import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  overflow-x: auto;
`;

export const TableWrapper = styled.table`
  width: 700px;
  border-collapse: collapse;
  margin: 20px auto;
  box-shadow: 0 1px 10px #000;
  text-align: center;
`;

export const Caption = styled.caption`
  padding-bottom: 10px;
  text-transform: uppercase;
`;

export const Cell = styled.th`
  border: 1px solid #000;
  width: 33.33%;
  background-color: rgb(231, 231, 231);

  ${({ red }) =>
    red &&
    css`
      background-color: crimson;
      color: #fff;
    `}

  ${({ fairy }) =>
    fairy &&
    css`
      background-color: rgb(211, 211, 211);
      color: crimson;
    `}
`;
