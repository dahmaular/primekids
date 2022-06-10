import React from "react";
import "./terms-box.css";
import HTP from "../../assets/How-to-Participate.png";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const TermsBox = () => {
  return (
    <div className="terms_box">
      {/* <img src={HTP} /> */}
      {isMobile ? <img src={HTP} height={330} /> : <img src={HTP} /> }
      {/* <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView> */}
      {/* <div className="terms_items">
        <div className="terms__info">
          <p>
            1st Stage: 100 votes minimum <br/>
            2nd Stage: 250 votes minimum <br/>
            3rd Stage: 500 votes minimum <br/>
            Voting costs N100 per vote. <br/>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default TermsBox;
