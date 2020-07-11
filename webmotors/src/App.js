import React from "react";

/* Import Components */
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";

/* Import Styles */
import GlobalStyle from "./styles/global";

const App = (props) => {
  return (
    <>
      <Header />
      <Form />
      <GlobalStyle />
    </>
  );
};

export default App;
