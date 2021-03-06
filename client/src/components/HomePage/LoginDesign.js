import React, { Component, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";

class LoginDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      name: ""
    };
    this.ValueChange = this.ValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ValueChange(e) {
    let nextChange = {};
    nextChange[e.target.name] = e.target.value;
    this.setState(nextChange);
  }

  handleSubmit = async (e) => {
    e.preventDefault(); //오류없이 이벤트 전파(새로고침 방지)
    if (this.state.id && this.state.password !== "") {
      const url = "/api/LoginInfo";
      const formData = new FormData();
      formData.append("id", this.state.id);
      formData.append("password", this.state.password);
      const config = {
        headers: {
          "content-type": "multipart/form-data", //간단하게 적을려고 multer사용
        },
      };

      try {
        const res = await axios.post(url, formData, config);

        if (res.data.success) {
          alert("로그인 되었습니다.");
          alert(this.state.hashPassword);
          this.onLogin();
          window.sessionStorage.setItem(
            "login_info",
            JSON.stringify(this.state.id)
          ); // 세션스토리지 저장 시 사용자가 입력한 암호를 다시 암호화 하여 보안 유지
        } else {
          alert("비밀번호 또는 아이디가 일치하지 않습니다.");
        }
        console.log(res.data.success);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("빈칸이 있습니다. 모두 입력해주세요.");
    }
  };

  handleLocalClear(e) {
    e.preventDefault();
    sessionStorage.clear();
  }

  render() {
    const { t } = this.props
    const isLogged = this.props.isLogged; //props값을 받지 못함.. logged.js 참조. export가 안됨.
    console.log(isLogged);
    let button = null;
    if(!isLogged){
      button = <button onClick={this.handleLocalClear}>{t("로그아웃")}</button>;
    }else{
      button = <button type="submit">{t("로그인")}</button>;
    }
    console.log(button);
    return (
      <div className="Login-Container">
        <div className="loginOutSize">
          <form onSubmit={this.handleSubmit}>
            <div className="loginP">
              <p>{t("로그인")}</p>
              <p>{t("당신의 가능성에 보답하세요!")}</p>
            </div>
            <div className="login-items">
              <input
                type="text"
                placeholder="ID"
                className="Id"
                name="id"
                value={this.state.id}
                onChange={this.ValueChange}
              />
              <input
                type="password"
                placeholder="PASSWORD"
                className="Password"
                name="password"
                value={this.state.password}
                onChange={this.ValueChange}
              />
            </div>
            {button}
            <div className="signUp-Container">
              <span>
                {t("계정이 없으신가요?")}
                <Link to="/RegisterAdd">
                  <span className="signUp">{t("회원가입 하기")}</span>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withTranslation()(LoginDesign);
