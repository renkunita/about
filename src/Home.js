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
      <p> I'm Ren Kunita.<br/>
        I am currently working as a software engineer at <a href="https://www.softbank.jp/">SoftBank Corp</a>.
        I am involved in mobile applications and IoT product projects developing front-end and back-end applications.
        I mainly use JavaScript and Java.
        <br/><br/>
        When I was a student, I was a member of <a href="http://www.jsk.t.u-tokyo.ac.jp/index.html">JSK Robotics Laboratory</a> at the University of Tokyo.
        My research theme was motion planning for humanoid robots, and in parallel, I developed tactile sensors.
      </p>
      <br/>

      <h2 className="title">Experience</h2>
      <div className="mgr">
        <div>
          <span className="dur">Apr 2022 - </span><br/>
          <b>SoftBank Corp.</b><br/>
          <span>*Software Engineer</span>
        </div>
        <br/>
        <div>
        <span className="dur">Apr 2021 - Mar 2022</span><br/>
          <b>The University of Tokyo</b><br/>
          <span>*Research Assistant, Part-time</span>
        </div>
        <br/>
        <div>
        <span className="dur">Sep 2020 - Sep 2020</span><br/>
          <b>Recruit Lifestyle Co., Ltd.</b><br/>
          <span>*Software Engineer, Part-time</span>
        </div>
      </div>
      <br/>

      <h2 className="title">Education</h2>
      <div className="mgr">
        <div>
        <span className="dur">Apr 2020 - Mar 2022</span><br/>
           <b>The University of Tokyo - Tokyo, Japan</b><br/>
           M.S. in Department of Mechano-Informatics, School of Engineering
        </div>
        <br/> 
        <div>
        <span className="dur">Apr 2016 - Mar 2020</span><br/>
           <b>The University of Tokyo - Tokyo, Japan</b><br/>
           B.S. in Department of Mechano-Informatics, Faculty of Engineering
        </div>
      </div>
      <br/>

      <h2 className="title">License and certifications</h2>
      <div className="mgr">
        <div>
        <span className="dur">Jun 2022</span><br/>
           <b>Applied Information Engineer Examination</b>
        </div>
      </div>

      </div> 
      </>
    );
  };
  