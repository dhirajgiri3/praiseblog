import React from "react";
import "./Scroll.css"


export default function Scroll() {
  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <section id="totop">
        <div onClick={gotobtn} className="gotobutton" title="Scroll to Top">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
      </section>
    </div>
  );
}
