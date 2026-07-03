import React from "react";

const Child = ({ parentFunction }) => {
  console.log("Child Rendered");
  return <div>Child</div>;
};

export default React.memo(Child)
