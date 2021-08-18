import React from "react";
import styled from "styled-components";

const Container = styled.span<{ isBlue: boolean }>`
  color: ${(props) => (props.isBlue ? props.theme.blueColor : "black")};
`;
// container = span

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count >= 10}>{count}</Container>
);

export default Number;
// Number 제작, 스타일 등등
