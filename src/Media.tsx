import React from "react";
import logo from "../src/Image/image.ico";

export default function Media() {
  return (
    <div>
      <img src={logo} alt="unlucky" />
    </div>
  );
}

export function MediaVideo() {
  return (
    <div>
      <table> 
        <thead>
          <tr>
            <th colSpan={3}>ex tbl</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>lol</td>
            <td>lol2</td>
            <td>lol3</td>
          </tr>
        </tbody>
      </table>
      <img src={logo} alt="unlucky" />
    </div>
  );
}
