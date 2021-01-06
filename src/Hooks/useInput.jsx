import React, { useState } from "react";

const useInput = (initVaule) => {
  const [value, setValue] = useState(initVaule);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange, setValue };
};

export default useInput;
