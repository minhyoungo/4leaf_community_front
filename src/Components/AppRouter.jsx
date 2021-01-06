import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../routes/layouts/Header";
import Footer from "../routes/layouts/Footer";
import Content from "../routes/layouts/Content";

const AppRouter = () => {
  return (
    <Router>
      {/* HEADER */}
      <Route path="/" component={Header} />
      {/* CONTENT */}
      <Route path="/" component={Content} />

      {/* FOOTER */}
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default AppRouter;
