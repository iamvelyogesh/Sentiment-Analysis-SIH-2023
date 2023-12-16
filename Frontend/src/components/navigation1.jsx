import React from "react";
import { useNavigate } from 'react-router-dom';

export const Navigationn1 = (props) => {


  const navigate = useNavigate();

  const handleh = () => {
    // Use the navigate function to go to the "/anat" route
    navigate('/');
  };
  const handletxt = () => {
    // Use the navigate function to go to the "/anat" route
    navigate('/text');
  };
  const handleaud = () => {
    // Use the navigate function to go to the "/anat" route
    navigate('/audio');
  };
  const handleimg = () => {
    // Use the navigate function to go to the "/anat" route
    navigate('/img');
  };
  const handlevdo = () => {
    // Use the navigate function to go to the "/anat" route
    navigate('/video');
  };


  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Sentify
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll" onClick={handletxt}>
                text
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={handleaud}>
                Voice
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={handlevdo}>
                Video
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Trend_Tester
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Multilingual
              </a>
            </li>
            <li>
              
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigationn1;
