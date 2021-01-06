import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../MM00";
import MM01 from "../MM01";
import MM02 from "../MM02";

const WholeWrapper = styled.div`
  width: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      <Route exact path="/signUp" component={MM01} />
      <Route exact path="/signIn" component={MM02} />
    </WholeWrapper>
  );
};

export default Content;
