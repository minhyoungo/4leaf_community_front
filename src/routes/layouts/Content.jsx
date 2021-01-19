import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../MM00";
import MM01 from "../MM01";
import MM02 from "../MM02";
import MM10 from "../MM10";
import MM10_D from "../MM10/MM10_D/MM10_D";

const WholeWrapper = styled.div`
  width: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      <Route exact path="/signUp" component={MM01} />
      <Route exact path="/signIn" component={MM02} />
      <Route exact path="/notice" component={MM10} />
      <Route exact path="/notice-detail/:key" component={MM10_D} />
      <Route exact path="/free1" component={MM11} />
      <Route exact path="/free2" component={MM12} />
      <Route exact path="/hot" component={MM13} />
      <Route exact path="/honeyTip" component={MM14} />
      <Route exact path="/story" component={MM15} />
      <Route exact path="/game" component={MM16} />
      <Route exact path="/flex" component={MM17} />
      <Route exact path="/zzal" component={MM18} />
      <Route exact path="/zisikin" component={MM19} />
    </WholeWrapper>
  );
};

export default Content;
