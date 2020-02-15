import React from "react";
import "../assets/styles/Gallery.css";

const getBundle = () => {
  import("lodash").then(_ => {
    console.log("imported ", _);
  });
};

export default function() {
  return (
    <div>
      <h1>Gallery</h1>
      <button onClick={getBundle}>Get Bundle</button>
    </div>
  );
}
