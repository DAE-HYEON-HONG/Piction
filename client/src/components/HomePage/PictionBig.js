// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import PictionBigPic from "../img/piction-big.png";
import { withTranslation } from "react-i18next";

class PictionBig extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="PictionBig-size">
        <img
          src={PictionBigPic}
          alt="piction-bigPic"
          className="PictionBigPic"
        />
        <div className="innerSizebig">
          <div className="Pic-Container">
            <span className="Pic2020s">2020s</span>
            <p className="creater">{t("크리에이터와")}</p>
            <p className="creater1">{t("팬이 만나는 곳, PICTION")}</p>
            <br />
            <br />
            <br />
            <button className="apply-creater">{t("크리에이터 신청")}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(PictionBig);
