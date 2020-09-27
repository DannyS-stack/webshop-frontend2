import React from "react";
import Card from "@material-ui/core/Card";

export default function productCard(props) {
  return (
    <Card variant="outlined" style={{ margin: 30, backgroundColor: "grey" }}>
      <h2>{props.name}</h2>
      <img
        style={{
          margin: 30,
          height: 200,
          width: 200,
        }}
        src={props.image}
      />
      <br></br> <br></br>
    </Card>
  );
}
