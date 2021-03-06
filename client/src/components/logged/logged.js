import React, {Component} from 'react';
import LoginDesign from "../HomePage/LoginDesign";
import HeaderComponent from "../HomePage/headerComponent";

class logged extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            onLogin: this.onLogin(),
            onLogout: this.onLogout(),
        };
        this.initUserInfo = this.initUserInfo.bind();
        this.onLogin = this.onLogin.bind();
        this.onLogout = this.onLogout.bind();
    }

    initUserInfo = () => {
        const loggedInfo = sessionStorage.getItem('loggedinfo');
        if (!loggedInfo) {
            this.onLogout();
        } else {
            this.onLogin();
        }
    }

    onLogin = () => {
        this.setState({
            logged: true,
        });
    }
    onLogout = () => {
        this.setState({
            logged: false,
        });
    }

    componentDidMount() {
        this.initUserInfo();
    }

    render() {
        return <headerComponent loggedIn={this.state.loggedIn} />
    }
}
export default logged;
