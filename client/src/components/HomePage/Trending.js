// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { TrendingItems } from "../atoms/TrendingItems.js";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";

const Trending = () => {
  const { t } = useTranslation();
  return (
    <div className="Trending-size">
      <div className="Trending-container">
        <section className="Trending-content1">
          <div className="Trending-background">
            <div className="Trending-OuterAlign">
              <div className="Trending-align">
                <span className="Trending-space">
                  {t("새로운")}
                  <br />
                  Trending
                </span>

                <div className="line" />
                <div className="Trending-p">
                  <p>
                    {t("당신을 위한 트렌드")}
                    <br />
                    {t("템플릿을 모아봤어요.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Trending-content2">
          <ul className="Trending-OutList">
            {TrendingItems.map((item3) => {
              return (
                <li className="Trending-Buttoncontainer" key={item3.id}>
                  <div>
                    <button className={item3.cName} />
                    <ul className="Titem-NameList">
                      <li>
                        <span>{item3.title}</span>
                        <br />
                        <span className="Titem-itemContent">
                          {item3.content}
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
};

export default withTranslation()(Trending);
