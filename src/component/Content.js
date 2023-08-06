import React from "react";

const Content = ({ dataContent, imgDataContent, imgDataContentStyle }) => {
  const { data } = dataContent[0];

  return (
    <>
      <div
        id="content"
        className="card"
        style={{ height: "100%", backgroundColor: "#eeeeee" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="card-body">
                <h1 className="card-title text-center" style={{ color: "#6796ac" }}>
                  {dataContent[0].title}
                </h1>
                <p className="card-text text-justify">
                  {dataContent[0].description}
                </p>
              </div>
            </div>
            <div className="col-sm-3 mt-5">
              <div className="mb-3">
                <img
                  src={imgDataContent}
                  className="card-img-top"
                  alt="..."
                  style={imgDataContentStyle}
                />
              </div>
            </div>
          </div>

          <div className="row ml-2 mr-2 mb-5 mt-5">
            {data?.map((e, idx) => {
              return (
                <div className="col-sm-4 mb-1" key={idx}>
                  <div className="card rounded-pill border-warning" style={{ height: "100%" }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">{e.title}</h5>
                      <p className="card-text text-justify text-center">{e.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
