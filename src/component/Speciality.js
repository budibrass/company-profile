import React from "react";

const Speciality = ({ dataSpeciality }) => {
    const { data } = dataSpeciality[0];

  return (
    <>
      <div id="speciality" className="card bg-info" style={{ height: "100%" }}>
        <div className="card m-4" style={{ height: "100%" }}>
          <div className="card-body">
            <h1 className="card-title text-center">
                {dataSpeciality[0].title}
            </h1>
            <p className="card-text text-justify">
              {dataSpeciality[0].description}
            </p>
          </div>

          <div className="row">
            {data?.map((e, idx) => {
                return (
                    <div className="col-sm-4" key={idx}>
                        <div className="text-center m-2 p-2 shadow-sm p-3 mb-5 bg-white rounded-circle">
                            <img
                            src={e.imgPath}
                            className="card-img-top m-auto"
                            alt="..."
                            style={{ width: "100px" }}
                            />
                            <div className="card-body">
                            <h5 className="card-title">
                                {e.title}
                            </h5>
                            <p className="card-text">
                                {e.description}
                            </p>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Speciality;
