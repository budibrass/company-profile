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
          <div className="card-body">
            <h1 className="card-title text-center" style={{ color: "#6796ac" }}>
              {dataContent[0].title}
            </h1>
            <p className="card-text text-justify">
              {dataContent[0].description}
            </p>
          </div>

          <div className="row ml-3 mr-3 mb-3">
            {data?.map((e, idx) => {
              return (
                <div className="col-sm-6" key={idx}>
                  <div className="">
                    <div className="card-body">
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text text-justify">{e.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-sm-6">
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
        </div>
      </div>
    </>
  );
};

export default Content;
