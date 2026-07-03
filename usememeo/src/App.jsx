import React from "react";
import UseMemo from "./components/UseMemo";

const App = () => {
  let myWorld = () => {
    console.log("React World");
  };
  return (
    <div>
      <UseMemo data={myWorld} />
    </div>
  );
};

export default App;
