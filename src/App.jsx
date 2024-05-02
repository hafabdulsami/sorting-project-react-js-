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
        <p className="initial-line">
          A Sorting Algorithm is used to rearrange a given array or list of
          elements according to a comparison operator on the elements. The
          comparison operator is used to decide the new order of elements in the
          respective data structure. Different type of algorithm are given
          below:
        </p>
        <Defination />
        <File_reader />
        <Tablee />
      </div>
    </>
  );
};

export default App;
