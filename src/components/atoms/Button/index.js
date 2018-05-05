import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: block;
  border-radius: 44px;
  font-size: 16px;
  text-align: center;
  color: #333;
  background-color: #ffca46;
  word-wrap: break-word;
  padding: 15px;
  cursor: pointer;

  &:hover {
    color: #a4a4a4;
    background-color: #ffdb80;
    text-decoration: none;
  }
`;

export const PrimaryButton = () => {
  return <Button>履歴一覧</Button>;
};
