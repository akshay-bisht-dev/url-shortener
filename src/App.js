import React, { useState } from "react";
import InputContainer from "./components/InputContainer";
import LinkResult from "./components/LinkResult";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="container">
        <InputContainer setInputValue={setInputValue} />
        <LinkResult inputValue={inputValue} />
      </div>
    </>
  );
};

export default App;
