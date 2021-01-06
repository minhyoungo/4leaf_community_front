import React, { useState, useEffect } from "react";
import withSplitting from "../../Lib/withSplitting";
const MM02Presenter = withSplitting(() => import("./MM02Presenter"));
import { useQuery, useMutation } from "react-apollo-hooks";

const MM02Container = () => {
  ////////////  VARIABLE      //////////////
  ////////////  USE STATE     //////////////
  ////////////  USE REF       //////////////
  ////////////  USE CONTEXT   //////////////
  ////////////  USE QUERY     //////////////
  ////////////  USE MUTATION  //////////////
  ////////////  USE EFECT     //////////////

  return <MM02Presenter />;
};

export default MM02Container;
