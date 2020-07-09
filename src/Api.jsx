import React, { Component } from 'react'
import Axios from 'axios'

export class Api extends Component {
    state = {
        data: []
    }
    async componentDidMount() {
        let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=bitcoin&format=json&origin=*'
        try {
            // this.setState({
            //     data: await (await fetch(url)).json()
            // })
            Axios.get(url).then((data)=>{
                this.setState({
                    data: data['data'][1]
                })
            })
        } catch(error) {
            alert(error)
        }
    }
    render() {
        let {data} = this.state
        let list = data.map((entry, index)=> {
            return <li key={index}>{entry}</li>
        })
        return (
            <ol>
                {list}
            </ol>
        )
    }
}

export default Api
