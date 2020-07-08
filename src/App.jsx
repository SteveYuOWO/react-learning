import React, { Component } from 'react';
import Table from './Table'
import Form from './Form';
import Api from './Api';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    items: [
      { username: 'steveyu', password: '123' },
    ]
  }

  removeItem = index => {
    this.setState(prevStat => ({
      items: prevStat.items.filter((item, i) => i !== index)
    }))
  }

  handleSubmit = newItem => {
    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  render() {
    // let { items } = this.state
    return (
      <div className="container">
        <h1 className="steve-center">测试表格</h1>
        {/* table example */}
        {/* <Table items={items} removeItem={this.removeItem} /> */}
        <Table {...this.state} removeItem={this.removeItem} />


        {/* form example */}
        <Form handleSubmit={this.handleSubmit} />
        {/* data from Internet example */}
        <Api />
      </div>
    )
  }
}

export default App;
