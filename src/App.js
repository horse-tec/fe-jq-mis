import React, {Component} from 'react';
import './App.css';
import {Layout, Menu, Icon, message, BackTop} from 'antd';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CityManage from "./Pages/CityManage/CityManage";
import ProfessionManage from "./Pages/ProfessionManage/ProfessionManage";
import Login from "./Pages/Login/Login";
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
                        <Login onLoginSuccess={this.onLoginSuccess.bind(this)} onLoginFail={this.onLoginFail.bind(this)}/>
                    ) : null }
                    <BackTop/>
                </Layout>
            </Router>
        );
    }

    componentDidMount() {
        let localStorage = window.localStorage;
        if (localStorage) {
            let token = localStorage.getItem("token");
            if (token && token.length && token.length > 0) {
                this.setState({
                    isLogin: true
                });
            } else {
                this.setState({
                    isLogin: false
                });
            }
        }

    }

    onLoginSuccess(token) {
        let localStorage = window.localStorage;
        if (localStorage) {
            localStorage.setItem("token", token);
            this.setState({
                isLogin: true
            });
            message.success('Login Success');
        }
    }

    onLoginFail() {

    }

    onSelectMenu(item, key, selectedKeys) {
        this.setState({
            selectedMenu: key
        })
    }

}

export default App;