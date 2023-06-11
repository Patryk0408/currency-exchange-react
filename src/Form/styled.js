import styled from "styled-components";

export const Header = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.color.crimson};
  text-decoration: underline;
`;

export const FormWrapper = styled.form`
  max-width: 700px;
  margin: 0 auto 20px;
  text-align: center;
`;

export const FormFieldset = styled.fieldset`
  padding: 20px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.crimson};
  color: ${({ theme }) => theme.color.white};
  padding: 5px 10px;
  border: none;
`;

export const Result = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.sanFelix};
`;

export const Paragraph = styled.p`
  text-align: center;
  padding: 0 0 20px;
  font-weight: bold;
`;
