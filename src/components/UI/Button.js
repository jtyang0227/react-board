import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs((props) => {
  return {
    type: props.type || "button",
    className: props.className || "btn btn-default",
  };
})``;

const blockButton = styled.button.attrs((props) => {
  return {
    type: props.type || "button",
    className: `btn btn-block ${props.className}`,
  };
})``;


export const ModalCloseButton = styled.button`
  position: absolute;
`;

export default Button;
export const BlockButton = blockButton;
