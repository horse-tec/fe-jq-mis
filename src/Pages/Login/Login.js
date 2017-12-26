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

                        <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.isLoading}>
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
            if (!err) {
                // values.userName
                // values.password
                setTimeout(function() {
                    message.error("Login Fail")
                    this.setState({
                        isLoading: false
                    });
                }.bind(this), 1000)

                axios.get("https://zhuanlan.zhihu.com/api/columns/bigertech/posts?limit=1&offset=10")
                    .then(function(res) {
                        console.log(res)
                    })
                    .catch();

                console.log('Received values of form: ', values);
                // this.onLoginSuccess()
            }
        });
    }

    onLoginSuccess() {
        let loginCallBack = this.props.onLoginSuccess;
        if (loginCallBack) {
            loginCallBack("abc")
        }
    }

    componentDidMount() {

    }

}

export default Form.create()(Login)
