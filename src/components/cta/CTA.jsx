import React from "react";
import "./cta.css";

const CTA = () => {
  const handleSubscribeClick = () => {
    alert("This feature is still in progress. You are not subscribed.");
  };

  return (
    <div className="cta">
      <div className="cta-content">
        <h3>Newsletter</h3>
        <h2 className="gradient__text">Let's Work Together</h2>
        <p>
          Are you impressed and want a project done, give a call or email me any
          time.
        </p>
      </div>
      <div className="cta-btn">
        <input
          type="email"
          placeholder="Your Email Address"
          className="form-input-one"
        />
        <button type="button" onClick={handleSubscribeClick}>
          SUBSCRIBE NOW
        </button>
      </div>
    </div>
  );
};

export default CTA;
