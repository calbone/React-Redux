import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PrimaryButton = styled(Link)`
  display: block;
  border-radius: 44px;
  font-size: 16px;
  text-align: center;
  color: #333;
  background-color: #ffca46;
  word-wrap: break-word;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #a4a4a4;
    background-color: #ffdb80;
    text-decoration: none;
  }
`;

export default PrimaryButton;
