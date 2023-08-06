import React from "react";

const Footer = ({ dataFooter }) => {
  return (
    <>
      <div
        className="pt-3"
        style={{ height: "100%", backgroundColor: "#eeeeee" }}
      >
        <div className="container">
          <div className="d-flex justify-content-center">
            <img
              src={dataFooter[0].imgPath}
              height="30"
              alt=""
            />
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-sm-11">
              <div className="" style={{ height: "100%" }}>
                <form className="m-2">
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>
                        {dataFooter[0]?.title}
                    </option>
                    </select>
                    <div className="text-center mt-3">
                      {dataFooter[0]?.description}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2" style={{ height: "40px" }}></div>
      </div>
    </>
  );
};

export default Footer;
