import React from "react";
import Speciality from "../component/Speciality";
import { DataFooter, DataSpeciality } from "../utils/data";
import Footer from "../component/Footer";

const SpecialityPage = () => {
  return (
    <>
      <Speciality dataSpeciality={DataSpeciality} />
      <Footer dataFooter={DataFooter} />
    </>
  );
};

export default SpecialityPage;
