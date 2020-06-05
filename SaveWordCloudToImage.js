import React, { createRef } from "react";
import ReactWordcloud from "react-wordcloud";
import { saveSvgAsPng } from "save-svg-as-png";
import { Button } from "antd";

const SaveWordCloudToImage = () => {
  const wordcloudRef = createRef();
  const words = [
    {
      text: "told",
      value: 64
    },
    {
      text: "mistake",
      value: 11
    },
    {
      text: "thought",
      value: 16
    },
    {
      text: "bad",
      value: 17
    },
    {
      text: "correct",
      value: 10
    },
    {
      text: "day",
      value: 54
    },
    {
      text: "prescription",
      value: 12
    },
    {
      text: "time",
      value: 77
    },
    {
      text: "thing",
      value: 45
    },
    {
      text: "left",
      value: 19
    },
    {
      text: "pay",
      value: 13
    },
    {
      text: "people",
      value: 32
    },
    {
      text: "month",
      value: 22
    },
    {
      text: "again",
      value: 35
    },
    {
      text: "review",
      value: 24
    },
    {
      text: "call",
      value: 38
    },
    {
      text: "doctor",
      value: 70
    },
    {
      text: "asked",
      value: 26
    },
    {
      text: "finally",
      value: 14
    },
    {
      text: "insurance",
      value: 29
    }
  ];

  const handleSave = () => {
    const svgElement = wordcloudRef.current.querySelector("svg");
    saveSvgAsPng(svgElement, "wordcloud.png");
  };

  return (
    <>
      <span ref={wordcloudRef}>
        <ReactWordcloud words={words} />
      </span>
      <Button onClick={handleSave}>Save</Button>
    </>
  );
};

export default SaveWordCloudToImage;
