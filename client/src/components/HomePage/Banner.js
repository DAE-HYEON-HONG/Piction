import React from "react";
import { Choice } from "../atoms/Choice.js";
import { withTranslation } from "react-i18next";
// import BannerImageViewer from './bannerImageViewer.js';

class Banner extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="banner-size">
        <div className="bannerContainer">
          <div className="content">
            <div className="bannerContent1 bannerSide">
              <span>PICTION</span>
              <span>'S CHOICE</span>
            </div>
            <div className="bannerContent2 bannerSide">
              <span>{t("추천작 템플릿 디자인")}</span>
              <br />
              <span>{t("가장 현명한 템플릿이 됩니다.")}</span>
            </div>
            <div className="bannerContent3 bannerSide">
              <span>{t("초이스당첨 시 더욱 많은 커미션이 기다립니다.")}</span>
            </div>
            <div className="bannerContent4 bannerSide">
              <ul className="bannerContentList">
                <li className="bannerContentList-item">
                  {Choice.map((item, index) => {
                    return (
                      <button key={index} className="ContentList-item">
                        <img
                          className={item.cName}
                          src={item.src}
                          alt="button"
                        />
                      </button>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Banner);
