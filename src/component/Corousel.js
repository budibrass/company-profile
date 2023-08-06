import React from "react";

const Corousel = ({ dataCorousel }) => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="container">
          <div className="carousel-inner">
            {dataCorousel?.map((e, idx) => {
                return (
                    <div className={`carousel-item ${e.active} text-center`} key={idx}>
                        <div className="d-block w-100" style={{ height: "100%" }}>
                            <div className="card-body">
                                <h1 className="card-title" style={{ color: "#6796ac" }}>
                                    {e.title}
                                </h1>
                                <h3 className="card-subtitle mb-2 text-muted">
                                    {e.subTitle}
                                </h3>
                                <p
                                    className="card-text text-justify blockquote-footer mt-5"
                                    style={{ fontSize: "20px" }}
                                >
                                    {e.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Corousel;
