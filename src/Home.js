import React from "react";
import "./Home.css";
import topimage from "./image/mountains-190055.jpg";


export default (props) => {
    return (
      <>
      <div className="topimage">
          <img
            src={topimage}
            alt="フリー画像"
          />
      </div>
      
      <div className="content">
      <h1>About</h1>
      <h2 className="title">Experience</h2>
      <ul>
        <div>
          <span className="dur">Apr 2022 - </span><br/>
          <b>SoftBank Corp.</b><br/>
          <span className="mgr">Software Engineer</span>
        </div>
        <br/>
        <div>
        <span className="dur">Apr 2021 - Mar 2022</span><br/>
          <b>The University of Tokyo</b><br/>
          <span className="mgr">Research Assistant, Part-time</span>
        </div>
        <br/>
        <div>
        <span className="dur">Sep 2020 - Sep 2020</span><br/>
          <b>Recruit Lifestyle Co., Ltd.</b><br/>
          <span className="mgr">Software Engineer, Part-time</span>
        </div>
      </ul>
      <br/>

      <h2 className="title">Education</h2>
      <ul>
        <div>
        <span className="dur">Apr 2020 - Mar 2022</span><br/>
           The University of Tokyo - Tokyo, Japan<br/>
           M.S. in Department of Mechano-Informatics, School of Engineering
        </div>
        <br/> 
        <div>
        <span className="dur">Apr 2016 - Mar 2020</span><br/>
           The University of Tokyo - Tokyo, Japan<br/>
           B.S. in Department of Mechano-Informatics, Faculty of Engineering
        </div>
      </ul>
      <br/>

      <h2 className="title">License and certifications</h2>
      <ul>
        <div>
        <span className="dur">Jun 2022</span><br/>
           Applied Information Engineer Examination
        </div>
      </ul>
      </div> 
      
      </>
    );
  };
  