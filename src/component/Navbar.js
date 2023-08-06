import React from "react";

const Navbar = ({ imgSrc, imgWidth, imgHeight, imgAlt, listMenu }) => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#carouselExampleSlidesOnly">
          <img src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAlt} />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {listMenu?.map((e, idx) => {
              return (
                <li className="nav-item" key={idx}>
                  <a className="nav-link" href={e.href}>
                    {e.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
