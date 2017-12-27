/**
 * Created by xuyanjun on 17/12/26.
 */
import React from 'react'
import './Login.css'
import {Form, Icon, Input, Button, message} from "antd";
import md5 from 'blueimp-md5'
import axios from 'axios'

const FormItem = Form.Item;

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            isLoading: false
        }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        if (this.state.isShow) {
            return (
                <div className="login-container">
                    <div className="login-title">Hello</div>
                    <Form onSubmit={this.handleLogin} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Username"/>
                            )}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                       placeholder="Password"/>
                            )}
                        </FormItem>

                        <Button type="primary" htmlType="submit" className="login-form-button"
                                loading={this.state.isLoading}>
                            Log in
                        </Button>
                    </Form>
                </div>
            )
        } else {
            return null
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true
        });
        this.props.form.validateFields((err, values) => {
            let self = this;
            if (!err) {
                // values.userName
                // values.password
                axios.post("http://localhost:5000/auth/login", {
                    UserName: values.userName,
                    Password: values.password
                }).then(function (res) {
                    self.setState({
                        isLoading: false
                    });
                    if (res.status === 200) {
                        let data = res.data;
                        if (data && data.token) {
                            self.onLoginSuccess(data.token)
                        }
                    }
                    console.log(res)
                }).catch(function (err) {
                    self.setState({
                        isLoading: false
                    });
                    message.error("Login Fail")
                });
                // this.onLoginSuccess()
            }
        });
    }

    onLoginSuccess(token) {
        let loginCallBack = this.props.onLoginSuccess;
        if (loginCallBack) {
            loginCallBack(token)
        }
    }

    componentDidMount() {

    }

}

export default Form.create()(Login)
