import React from "react";
import { Button } from "@material-ui/core";

const List = ({ key, topic }) => {
  return (
    <div>
      <Button onClick={() => prompt("button Clicked")}>
        {key} {topic}
      </Button>
    </div>
  );
};

export default List;
