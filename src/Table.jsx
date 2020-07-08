import React from 'react';

const Table = (props) => {
    let {items, removeItem } = props

    let itemContent = items.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td><button onClick={()=>{removeItem(index)}}>删除</button></td>
            </tr>
        )
    })

    return (
        <div>
            <table className="steve-tab">
                <thead>
                    <tr>
                        <td>用户名</td>
                        <td>密码</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    { itemContent }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
