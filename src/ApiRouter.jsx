import React from 'react'
import { Route, Switch, withRouter, NavLink } from 'react-router-dom'
import R1 from './routerpage/R1'
import R2 from './routerpage/R2'
import App from './App'
import Hook from './routerpage/Hook'

function ApiRouter(props) {
    console.log(props)
    return (
        <div>
            <NavLink to='/r2'>r2</NavLink><br/><br/>
            <NavLink to='/r1' >r1</NavLink><br/><br/>
            <button onClick={ () => props.history.push('/r1') }>R1</button><br/><br/>
            <button onClick={ () => props.history.push('/r2') }>R2</button><br/><br/>
            <button onClick={ () => props.history.push('/Hook') }>Hook</button><br/><br/>
            <Switch>
                <Route path="/r1" component={R1} />
                <Route path="/r2" component={R2} />
                <Route path="/Hook" component={Hook} />
                <Route path="/" component={App} />
            </Switch>
        </div>
    )
}

export default withRouter(ApiRouter)
