import React, {Component} from 'react';
import './App.css';
import {Layout, Menu, Icon, message, BackTop} from 'antd';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CityManage from "./Pages/CityManage/CityManage";
import ProfessionManage from "./Pages/ProfessionManage/ProfessionManage";
import Login from "./Pages/Login/Login";
import axios from 'axios'
import localStorage from './util/localStorage'
import ep from './util/ep'
import EditSchool from "./Pages/School/EditSchool";

const {Header, Content, Footer, Sider} = Layout;

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedMenu: null,
            isLogin: false
        }
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
                        <div className="logo"/>
                        <Menu theme="dark" mode="inline"
                              selectedKeys={[this.state.selectedMenu || window.location.pathname]}
                              onSelect={this.onSelectMenu.bind(this)}>
                            <Menu.Item key="/">
                                <Icon type="user"/>
                                <Link to="/" style={{display: "inline"}}><span className="nav-text">nav 1</span></Link>
                            </Menu.Item>
                            <Menu.Item key="/1">
                                <Icon type="video-camera"/>
                                <Link to="/1" style={{display: "inline"}}><span className="nav-text">nav 2</span></Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{marginLeft: 200}}>
                        <Header style={{background: '#fff', padding: 0}}/>
                        <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                            {this.state.isLogin ? (
                                <Switch>
                                    <Route exact path="/" component={CityManage}/>
                                    <Route path="/1" component={ProfessionManage}/>
                                    <Route path="/school/edit" component={EditSchool}/>
                                </Switch>
                            )
                                : null
                            }
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                    {!this.state.isLogin ? (
                        <Login onLoginSuccess={this.onLoginSuccess.bind(this)} />
                    ) : null }
                    <BackTop/>
                </Layout>
            </Router>
        );
    }

    componentDidMount() {
        this.registerEvent();
        this.checkUserInfo();
    }

    checkUserInfo() {
        let token = localStorage.getItem("token");
        axios.defaults.baseURL = "http://localhost:5000";
        if (token && token.length > 0) {
            this.setState({
                isLogin: true
            });
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            this.getUserInfo();
        } else {
            this.setState({
                isLogin: false
            });
        }
    }

    registerEvent() {
        let self = this;
        ep.on('login', function (data) {
            if (data) {
                message.error(data);
            }
            self.setState({
                isLogin: false
            });
            localStorage.removeItem("token");
        });

        ep.on("showLoading", function(data) {

        })
    }

    onLoginSuccess(token) {
        localStorage.setItem("token", token);
        this.setState({
            isLogin: true
        });
        message.success('Login Success');
        this.getUserInfo();
    }

    getUserInfo() {
        let self = this;
        axios.get("/api/getUserInfo")
            .then(function (resp) {
                if (resp.status === 200) {
                    let data = resp.data;
                    console.log(data)
                } else {
                    console.log(resp)
                }
            })
            .catch(function (err) {
                if (err && err.response) {
                    let resp = err.response;
                    message.info("login again");
                    if (resp.status === 401) {
                        localStorage.removeItem("token");
                        self.setState({
                            isLogin: false
                        });
                    }
                }
            });
    }

    onSelectMenu(item, key, selectedKeys) {
        this.setState({
            selectedMenu: key
        })
    }

}

export default App;