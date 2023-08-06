import React from "react";
import Corousel from "../component/Corousel";
import Content from "../component/Content";
import { DataCorousel, DataContent } from "../utils/data";

const About = () => {
  return (
    <>
      <Corousel dataCorousel={DataCorousel} />
      <Content
        dataContent={DataContent}
        imgDataContent="/assets/CardContent.png"
        imgDataContentStyle={{ width: "70%" }}
      />
    </>
  );
};

export default About;
