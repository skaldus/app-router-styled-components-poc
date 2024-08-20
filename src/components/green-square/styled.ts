"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
`;

export const Square = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: ${(props) => props.theme.greenSquare.width}px;
  height: ${(props) => props.theme.greenSquare.height}px;
  background-color: ${(props) => props.theme.greenSquare.backgroundColor};
`;
