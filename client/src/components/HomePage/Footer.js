// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// import Select from 'react-select';
import { useTranslation } from "react-i18next";
import i18n from "../language/i18n.js";
import GrayScale from "../img/ICON_GrayScale.png";

function Footer() {
  const { t } = useTranslation();
  const changeLang = (e) => {
    i18n.changeLanguage(`${e.target.value}`);
  };
  return (
    <div className="footer-size">
      <div className="innerSizeFooter">
        <div className="footer-container">
          <div className="footerLogo">
            <img src={GrayScale} alt="footerLogo" className="grayScale" />
          </div>
          <nav className="fnb">
            <ul className="fnbList">
              <li className="fnbList-item">
                <a href="#">{t("서비스 이용 약관")}</a>
              </li>
              <li className="fnbList-item">
                <a href="#">{t("개인정보 처리방침")}</a>
              </li>
              <li className="fnbList-item">
                <a href="#">INTRODUCE PICTION</a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            <div className="copyright1">
              <p>Contact | help@piction.network</p>
              <p>© 2018-2020 Piction Network. All rights reserved</p>
            </div>
            <div className="language">
              <select onChange={changeLang} className="inner-languege">
                <option value="ko">한국어</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
