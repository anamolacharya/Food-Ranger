import React from "react";

function Footer() {
  var getFullyear = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <h4>Food Ranger Inc. Copyright ©{getFullyear}.</h4>
      </div>
    </>
  );
}
export default Footer;
