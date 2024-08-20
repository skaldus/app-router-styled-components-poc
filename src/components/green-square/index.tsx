import React from "react";

import AnyServerComponent from "../any-server-component";

import * as S from "./styled";

const Square = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return (
    <S.Container>
      <S.Square>
        <AnyServerComponent />
      </S.Square>
      <div>{data.title}</div>
    </S.Container>
  );
};

export default Square;
