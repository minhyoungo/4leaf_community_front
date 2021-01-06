import React, { useState, useEffect } from "react";
import withSplitting from "../../Lib/withSplitting";
const MM10Presenter = withSplitting(() => import("./MM10Presenter"));
import { useQuery, useMutation } from "react-apollo-hooks";

const MM10Container = () => {
  ////////////  VARIABLE      //////////////
  ////////////  USE STATE     //////////////
  ////////////  USE REF       //////////////
  ////////////  USE CONTEXT   //////////////
  ////////////  USE QUERY     //////////////

  ////////////  USE MUTATION  //////////////
  ////////////  USE EFECT     //////////////

  return <MM10Presenter />;
};

export default MM10Container;
