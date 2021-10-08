import React from "react";
import logo from "../src/Image/image.ico";

export default function Media(props:any) {
  return (
    <div>
      <img src={props.image} alt="unlucky" width={props.width} height={props.height} />
    </div>
  );
}

