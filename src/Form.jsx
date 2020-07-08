import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // 防止页面刷新
        this.props.handleSubmit(this.state)
        this.setState({username:'',password:''})
    }
    render() {
        return (
            <div className="steve-center">
                <form>
                    <br />
                    用户名：<input type='text' name='username' value={ this.state.username } onChange={this.handleChange} />
                    <br />
                    <br />
                    密码：<input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
                    <br />
                    <br />
                    <button onClick={this.handleSubmit}>提交</button>
                </form>
            </div>
        )
    }
}

export default Form
