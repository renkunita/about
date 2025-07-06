import React, { useEffect } from "react";
import styles from "./Home.module.css";
import usePageTracking from "../../hooks/usePageTracking";
import { scrollToSection, handleResize } from "../../utils/scrollUtils";

export default (props) => {
    usePageTracking();

    useEffect(() => {
      // URLのハッシュに基づいてスクロール位置を調整
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        setTimeout(() => {
          scrollToSection(elementId);
        }, 100);
      }

      // リサイズ時のハンドラーを設定
      const cleanupResize = handleResize(() => {
        // リサイズ後にハッシュがある場合は再スクロール
        const currentHash = window.location.hash;
        if (currentHash) {
          const elementId = currentHash.substring(1);
          scrollToSection(elementId);
        }
      });

      return cleanupResize;
    }, []);

    // セクションへのスクロール関数をグローバルに公開
    useEffect(() => {
      window.scrollToSection = scrollToSection;
    }, []);

    return (
      <>
      <div className={styles.content}>
      <h1 id="about">About</h1>
      <p> I'm Ren Kunita.<br/>
        I am currently working as a software engineer at <a href="https://www.softbank.jp/">SoftBank Corp</a>.
        I am involved in mobile applications and IoT product projects developing front-end and back-end applications.
        I mainly use JavaScript and Java.
        <br/><br/>
        When I was a student, I was a member of <a href="http://www.jsk.t.u-tokyo.ac.jp/index.html">JSK Robotics Laboratory</a> at the University of Tokyo.
        My research theme was motion planning for humanoid robots, and in parallel, I developed tactile sensors.
      </p>
      <br/>

      <h2 id="experience" className={styles.title}>Experience</h2>
      <div className={styles.mgr}>
        <div>
          <span className={styles.dur}>Apr 2022 - </span><br/>
          <b>SoftBank Corp.</b><br/>
          <span>*Software Engineer</span>
        </div>
        <br/>
        <div>
        <span className={styles.dur}>Apr 2021 - Mar 2022</span><br/>
          <b>The University of Tokyo</b><br/>
          <span>*Research Assistant, Part-time</span>
        </div>
        <br/>
        <div>
        <span className={styles.dur}>Sep 2020 - Sep 2020</span><br/>
          <b>Recruit Lifestyle Co., Ltd.</b><br/>
          <span>*Software Engineer, Part-time</span>
        </div>
      </div>
      <br/>

      <h2 id="education" className={styles.title}>Education</h2>
      <div className={styles.mgr}>
        <div>
        <span className={styles.dur}>Apr 2020 - Mar 2022</span><br/>
           <b>The University of Tokyo - Tokyo, Japan</b><br/>
           M.S. in Department of Mechano-Informatics, School of Engineering
        </div>
        <br/> 
        <div>
        <span className={styles.dur}>Apr 2016 - Mar 2020</span><br/>
           <b>The University of Tokyo - Tokyo, Japan</b><br/>
           B.S. in Department of Mechano-Informatics, Faculty of Engineering
        </div>
      </div>
      <br/>

      <h2 id="certifications" className={styles.title}>License and certifications</h2>
      <div className={styles.mgr}>
        <div>
        <span className={styles.dur}>Jun 2025</span><br/>
           <b>Microsoft Azure AI Engineer Associate (AI-102)</b>
        </div>
        <br/>
        <div>
        <span className={styles.dur}>Sep 2024</span><br/>
           <b>Microsoft Azure Administrator Associate (AZ-104)</b>
        </div>
        <br/>
        <div>
        <span className={styles.dur}>Jun 2022</span><br/>
           <b>Applied Information Engineer Examination</b>
        </div>
      </div>

      </div> 
      </>
    );
  };
  