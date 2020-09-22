// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import GenreLogo from "../img/ICON_Genre-items.png";
import { GenreListItem } from "../atoms/GenreListItem.js";
import { withTranslation } from "react-i18next";

class Genre extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="genre-size">
        <div className="genre-container">
          <section className="genre-content1">
            <div className="genre-icon">
              <img src={GenreLogo} alt="Genre" />
              <span className="genre-space">GENRE</span>
            </div>
            <div className="genre-p">
              <p>
                {t(
                  "새롭게 출시된 장르를 직접 두 눈으로 확인해보고 제작해보세요!"
                )}
              </p>
            </div>
          </section>
          <section className="genre-content2">
            <ul className="genre-OutList">
              {GenreListItem.map((item2) => {
                return (
                  <li className="genre-Buttoncontainer" key={item2.id}>
                    <div>
                      <button className={item2.cName} />
                      <ul className="Gitem-NameList">
                        <li>
                          <span>{t(`${item2.title}`)}</span>
                          <br />
                          <span className="Gitem-itemContent">
                            {item2.content}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Genre);
