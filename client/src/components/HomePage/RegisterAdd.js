import React from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";

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
  }

  handleFormSubmit =  async (e) => {
    e.preventDefault(); //오류없이 이벤트 전파(새로고침 방지)

    const ifEmail = /^[0-9a-zA-Z]*@[0-9a-zA-Z]*(.[a-zA-Z]{2,3})*/;
    const ifPass = /^[0-9a-zA-Z]{8,}/;

    let chkEmail = ifEmail.test(this.state.email);
    let chkPassword = ifPass.test(this.state.password);

    if (
      this.state.userName &&
      this.state.id &&
      this.state.password &&
      this.state.email !== ""
    ) {
      if (chkPassword) {
        if (chkEmail) {
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
          try{
            const res = await axios.post(url, formData, config);
            if (res.data.SignSuccess) {
              alert("회원가입 되었습니다.");
              this.props.history.push("/");
            } else {
              alert("아이디 값이 중복됩니다.");
            }
            console.log(res.data.SignSuccess);
          }catch (e) {
              console.log(e);
          }
          // return post(url, formData, config)}
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
