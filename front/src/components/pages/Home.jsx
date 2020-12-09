import React from "react";

import Nav from "../molecules/Nav";
export default function Home() {
  return (
    <>
      <section className="section">
        <div className="section_leftSide">
          <div className="section_leftSide_imgContainer">img</div>
          <div className="section_leftSide_textContainer">texte</div>
        </div>
        <div className="section_rightSide">
          <div className="section_rightSide_socialContainer">
            logo socialnetworks
          </div>
          <div className="section_rightSide_Nav">
            <Nav className="section_rightSide_Nav_links"></Nav>

            <div className="section_rightSide_Nav_logo">logo du site</div>
          </div>
        </div>
      </section>
    </>
  );
}
