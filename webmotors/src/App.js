import React from "react";

/* Import Components */
import Header from "./Components/Header/Header";
import ContainerForm from "./Components/ContainerForm/ContainerForm";

/* Import Styles */
import GlobalStyle from "./styles/global";

const App = (props) => {
  return (
    <>
      <Header />
      <ContainerForm />
      <GlobalStyle />
    </>
  );
};

export default App;
