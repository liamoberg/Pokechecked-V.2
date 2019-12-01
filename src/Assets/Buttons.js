import styled from "styled-components";
import { color } from "./Styles";

export const StandardButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  line-height: 16px;
  text-transform: uppercase;
  padding-top: 7px;
  padding-bottom: 7px;
  min-width: 75px;
  font-weight: 700;
  border: 1px solid #fff;
  border-radius: 20px;
  color: ${props => (props.active ? `${color.Violet}` : `${color.White}`)};
  background-color: ${props => (props.active ? "#FFFFFF" : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: ${color.Violet};
  }
`;
