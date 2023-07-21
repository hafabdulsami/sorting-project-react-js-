import React from "react";
import Header from "./component/header/Header";
import Defination from "./component/defination/Defination";
import File_reader from "./component/comparison/File_reader";
import Tablee from "./component/tablee/Tablee";

const App = () => {
  return (
    <>
      <Header />
      <div className="Main-page">
        <Defination />
        <File_reader />
        <Tablee />
      </div>
    </>
  );
};

export default App;
