import React, { useState } from "react";
import logo from "../img/logo.png";
import UserIco from "../img/ICON_User.png";
import ArrowDown from "../img/ICON_Arrow-Down.png";
import { useTranslation } from "react-i18next";
import "../language/i18n.js";
import { Link } from "react-router-dom";
import LoginDesign from "./LoginDesign";

function HeaderComponent() {
  const [open, setOpen] = useState(false); //useState상태관리를 이용하여 open과 setOpen를 선언하고 기본값은 false로 나타나지 않음을 표현
  const { t } = useTranslation();
  return (
    <div className="nav-container">
      <div className="firstMenu">
        <nav>
          <ul className="OutList">
            <li className="OutList-item">
              <Link to="/">
                <img src={logo} alt="TopLogo" />
              </Link>
            </li>
            <li className="OutList-item">
              <div className="container-button">
                <div className="OutItemDisplay">
                  <button className="nav-links">
                    {t("1")}
                    <div className="dropDown dp-none">
                      <ul className="dropDownList">
                        <li className="dropDownListItem">option1</li>
                        <li className="dropDownListItem">option2</li>
                        <li className="dropDownListItem">option3</li>
                      </ul>
                    </div>
                  </button>
                  <img src={ArrowDown} alt="arrow-down" />
                  <button className="nav-links">
                    {t("2")}
                    <div className="dropDown2 dp-none">
                      <ul className="dropDownList">
                        <li className="dropDownListItem">option 1</li>
                        <li className="dropDownListItem">option2</li>
                        <li className="dropDownListItem">option3</li>
                      </ul>
                    </div>
                  </button>
                  <img src={ArrowDown} alt="arrow-down" />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="secondMenu">
        <div className="SearchBar">
          <div className="SearchBar-Container">
            <div className="userImg">
              <Link to="#">
                <img
                  src={UserIco}
                  alt="UserImg"
                  onClick={() => setOpen(!open)} //클릭이벤트
                />
              </Link>
              {open && <LoginDesign />}
            </div>
            <input type="text" placeholder={t("searchBox")} />
            <select name="#" id="#">
              <option value="#">{t("searchOptions1")}</option>
              <option value="#">{t("searchOptions2")}</option>
              <option value="#">{t("searchOptions3")}</option>
              <option value="#">{t("searchOptions4")}</option>
            </select>
            {/*<h1>*/}
            {/*    <Link to="/RegisterAdd">*/}
            {/*        회원가입*/}
            {/*    </Link>*/}
            {/*    <Switch>*/}
            {/*        <Route path="/RegisterAdd" component={RegisterAdd}/>*/}
            {/*    </Switch>*/}
            {/*</h1>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderComponent;
