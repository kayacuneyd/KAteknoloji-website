import React from "react";
//import { Container, Row } from "react-bootstrap";

export default function ReferenceList(props) {
  return (
    <>
      <button className="reference-list mt-2 mb-2 bg-white">
        <img src={props.imgSrc} alt={props.title} width={250} height={100} />
      </button>
    </>
  );
}
