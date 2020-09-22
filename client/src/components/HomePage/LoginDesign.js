import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import App from "../../App.js";
import RegisterAdd from "../HomePage/RegisterAdd.js";

class LoginDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: null,
      id: "",
      password: "",
    };
    this.ValueChange = this.ValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ValueChange(e) {
    let nextChange = {};
    nextChange[e.target.name] = e.target.value;
    this.setState(nextChange);
  }

  handleId(e) {
    e.preventDefault();
    this.setState({
      id: e.target.value,
    });
  }

  handlePw(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault(); //오류없이 이벤트 전파(새로고침 방지)
    if (this.state.id && this.state.password !== "") {
      alert("로그인 되었습니다.");
      this.addUser() // axios로 정보보낼 곳. 아직 작성 안됨.
        .then(this.props.history.push("/"));
    } else {
      alert("빈칸이 있습니다. 모두 입력해주세요.");
    }
  }

  render() {
    const { t } = this.props;
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
                value={this.handleId}
              />
              <input
                type="password"
                placeholder="PASSWORD"
                className="Password"
                name="password"
                value={this.ValueChange}
              />
            </div>
            <button type="submit">{t("로그인")}</button>
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
