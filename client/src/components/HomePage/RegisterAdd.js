import React from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import bcrypt from "bcryptjs";

class RegisterAdd extends React.Component {
  // const {t} = useTranslation();
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      id: "",
      email: "",
      password: "",
      profileImg: null,
      picFileName: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this); //자바스크립트는 최상위와 연결시켜버려서 bind를 이용해 이벤트를 의미한다는 말.
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.addUser = this.addUser.bind(this);
    // this.ValueChangePassword = this.ValueChangePassword.bind(this);
    // this.emailCheck = this.emailCheck.bind(this);
  }

  //이건 이메일 정규화 표현 할려고 하다 아직 덜 만들어짐.
  // emailCheck(e) {
  //   e.preventDefault();

  //   if( this.state.userName &&
  //     this.state.id &&
  //     this.state.password &&
  //     this.state.email !== ""){
  //       if (ifEmail === this.state.email) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //   } else {

  //   }

  // }

  handleFormSubmit(e) {
    e.preventDefault(); //오류없이 이벤트 전파(새로고침 방지)

    const ifEmail = /^[0-9a-zA-Z]*@[0-9a-zA-Z]*(.[a-zA-Z]{2,3})*/;
    const ifPass = /^[0-9a-zA-Z]{8,}/;

    var chkEmail = ifEmail.test(this.state.email);
    var chkPassword = ifPass.test(this.state.password);

    if (
      this.state.userName &&
      this.state.id &&
      this.state.password &&
      this.state.email !== ""
    ) {
      if (chkPassword) {
        if (chkEmail) {
          // if(id != this.state.id){
          alert("회원가입 되었습니다.");
          const passwordHash = bcrypt.hashSync(this.state.password, 10);
          this.state.password = passwordHash;
          this.addUser().then(this.props.history.push("/")); //회원가입 후 다시 홈으로 이동시켜줌.
          // } else {
          //   alert("아이디가 중복 됩니다.");
          // }
        } else {
          alert("이메일 형식을 확인하세요");
        }
      } else {
        alert("비밀번호 8자리 이상 입력하세요");
      }
    } else {
      alert("칸에 문제가 있습니다. 정확하게 입력해주세요.");
    }
  }

  //파일 체인지 이벤트 헨들링(아직 사용하지 않았음.)
  handleFileChange(e) {
    this.setState({
      profileImg: e.target.files[0],
      picFileName: e.target.value,
    });
  }

  //이건 안에 있는 value값이 변경되는 것을 감지하는 이벤트
  handleValueChange(e) {
    let nextState = {}; //state값을 변경하기 위한 값
    nextState[e.target.name] = e.target.value; //name값은 해당 jsx input태그에 있는 name값임. 그리고 그 value값이 변경시 맨 위에서 선언한 state에게 값을 전달.
    this.setState(nextState); // nextState를 이용해 값을 갱신함.
  }

  // ValueChangePassword(e) {
  //   e.preventDefault();
  //   const passwordHash = bcrypt.hashSync(e.target.value, 10);
  //   let passwordChange = {};
  //   passwordChange[e.target.name] = passwordHash;
  //   this.setState(passwordChange);
  // }

  addUser() {
    const url = "/api/Register";
    const formData = new FormData();
    formData.append("image", this.state.file);
    formData.append("name", this.state.userName);
    formData.append("id", this.state.id);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("image", this.state.profileImg);
    const config = {
      headers: {
        "content-type": "multipart/form-data", //파일이 포함되어 있어서 multipart 사용 (단 multibody는 axios에서 지원하지 않음 multer사용필수!)
      },
    };
    // return post(url, formData, config)}
    return axios({
      method: "post",
      url,
      data: formData,
      headers: config,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }

  render() {
    const { t } = this.props;
    return (
      <div className="registerContainer">
        <div className="registerSize">
          <div className="registerTitle">
            <h1>{t("회원가입")}</h1>
            <p>{t("당신의 실력이 당신의 삶에 플러스 됩니다.")}</p>
          </div>
          <form onSubmit={this.handleFormSubmit} className="registerForm">
            {/*<p>*/}
            {/*    프로필 이미지*/}
            {/*</p>*/}
            {/*<input type="file" name="file" file={this.state.profileImg} value={this.state.picFileName} onChange={this.handleFileChange} className="name"/>*/}
            <p>{t("이름")}</p>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleValueChange}
              className="name"
            />
            <p>{t("아이디")}</p>
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleValueChange}
              className="name"
            />
            <p>{t("비밀번호 (8자리 이상)")}</p>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleValueChange}
              className="name"
            />
            <p>{t("이메일")}</p>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleValueChange}
              className="name"
            />
            <button type="submit" className="submitBtn">
              {t("회원가입 하기")}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default withTranslation()(RegisterAdd);
